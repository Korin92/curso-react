import { RouterContext } from "https://deno.land/x/oak@v9.0.0/mod.ts";
import { hashSync, compareSync } from "https://deno.land/x/bcrypt@v0.2.4/mod.ts";
import { makeJwt, setExpiration, Jose } from "https://deno.land/x/djwt@v1.7/create.ts";
import { users, User } from './users.ts';
import { favs } from './favs.ts'


const header: Jose = {
  alg: 'HS256',
  typ: 'JWT'
};

export async function getFavs (ctx: RouterContext) {
  const {username} = ctx.state.currentUser
  ctx.response.status = 200
  ctx.response.body = { favs: favs[username] }
}

export async function deleteFav (ctx: RouterContext) {
  const {id} = ctx.params
  const {username} = ctx.state.currentUser
  favs[username] = favs[username].filter(
    (favId : string) => favId !== id
  )

  console.log({
    idRemoved: id,
    remainingFavs: favs[username],
    username,
  })

  ctx.response.body = { favs: favs[username] }
  ctx.response.status = 200
}

export async function postFav (ctx: RouterContext) {
  const {id} = ctx.params
  const {username} = ctx.state.currentUser

  const alreadyExist = favs[username].some(
    (favId : string) => favId === id
  )
  if (!alreadyExist) {
    favs[username].push(id)
  }

  console.log({
    alreadyExist,
    favs: favs[username],
    username,
  })

  ctx.response.body = { favs: favs[username] }
  ctx.response.status = 201
}

export async function postLogin (ctx: RouterContext) {
  const body =  ctx.request.body();
  const {value} = await  body.value
  const {username, password} = value

  const user: any = users.find((u: User) => u.username === username);

  if (!user) {
    ctx.response.status = 403
  } else if (!compareSync(password, user.password)) {
    ctx.response.status = 403
  } else {
    const payload = {
      iss: user.username,
      exp: setExpiration(Date.now() + 1000 * 60 * 60)
    };
    const jwt = makeJwt({
      key: Deno.env.get('JWT_KEY') || '',
      header,
      payload
    })
    ctx.response.status = 201
    ctx.response.body = {jwt}
  }
}

export async function postRegister (ctx: RouterContext){
  const body =  ctx.request.body();
  const {value} = await body.value
  const {username, password} = value

  const hashedPassword = hashSync(password);

  const user: User = {
    username,
    password: hashedPassword,
  };

  // TODO: Check it doesn't exist yet
  const alreadyExist = users.find(user => user.username === username)
  if (alreadyExist) {
    ctx.response.status = 409
  } else {
    users.push(user);
    // initialize the user favs
    favs[username] = [];
    ctx.response.status = 201
  }

}

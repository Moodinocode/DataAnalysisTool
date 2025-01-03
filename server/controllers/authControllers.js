import {registerUser,userExists,getUserByEmail} from '../models/users'



const signup = async (req,res) => {
  const {username, email, password} = req.body;
  if (await userExists){
    return res.status(400).json({message: "User already exists"});
  }


  try {
    await registerUser(username,email,password)
  } catch (error) {
    return res.status(500).json({message:"error registering user"})
  }

  return res.status(201).json({message: "User created successfully"})
}


const login = async (req,res) => {
  const {email, password} = req.body;
  const user = await getUserByEmail(email);
  if (!user) {
    return res.status(401).json({message: "Invalid email or password"});
  }
  if (!(await comparePassword(password,user.password))){
    return res.status(401).json({message: "Invalid email or password"});
  }
  if (user.verified !== true) {
    return res.status(401).json({message: "User not verified"});
  }
  const token = await generateToken(user);
  return res.status(200).json({token})
}

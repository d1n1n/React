
import { useForm } from 'react-hook-form';
export default function Login(){

    // let passRef = useRef()
    // const user = {
    //     login:"",
    //     password:""
    // }
    // const emailChange = (e) =>{
    //     user.login = e.target.value;
    // }
   
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onSubmit = (user) =>{

        console.log(`login data : `,user)
    }
    return(
        <>
            
        <form  onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email</label>
                <input {...register("email")} type="text" name="email" />
            </div>
            <div>
                <label>Password</label>
                <input {...register("password")} type="password" name="password" />  
            </div>
            <div>
                <label>Bonus</label>
                <input {...register("bonus")} type="number" name="bonus" />  

            </div>
            <div>
                <label></label>
                <button  type="submit">Login</button>
            </div>
        </form>
            
        </>
    )
}
import { Radio } from 'antd';
import '../App.css'
import { useForm } from 'react-hook-form';
export default function Login(){
   
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
                <label>Nickname</label>
                <input
                        {...register("nickname", {
                            required: "Nickname is required",
                            minLength: {
                                value: 7,
                                message: "Nickname cannot be shorter than 7 ",
                            },
                        })}
                        type="text"
                        name="nickname"
                    />

                  
            </div>
            <div>
                <label>Age</label>
                <input
                        {...register("age", {
                            required: "Age is required",
                            min: {
                                value: 18,
                                message: "You must be at least 18 years old",
                            },
                        })}
                        type="number"
                        name="age"
                    />
            </div>
            <div>
                    <div>
                        <Radio.Group {...register("sex")} defaultValue="male">
                            <Radio value="male">Male</Radio>
                            <Radio value="female">Female</Radio>
                        </Radio.Group>
                    </div>

            </div>
            <div>
                <label></label>
                <button  type="submit">Login</button>
            </div>
        </form>
            
        </>
    )
}
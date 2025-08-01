import React, { useState } from 'react'
import { ShipWheelIcon } from 'lucide-react'
import { Link } from 'react-router';
import useSignup from '../hooks/useSignup';

function SignUpPage() {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  // This is how we did it first version, without signg our custom hook
  // const queryClient = useQueryClient();
  // const { mutate: signupMutation, isPending, error } = useMutation({
  //   mutationFn: signup,
  //   onSuccess: () => queryClient.invalidateQueries({ queryKey: ["authUser"] }),
  // })

  // This is how we did it using our custom hook - optimize version
  const { error, isPending, signupMutation } = useSignup()

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  }
  return (
    <div className='h-screen flex items-center justify-center p-4 sm:p-6 md:p-8' data-theme="night">
      <div className='border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden'>
        {/* SIGNUP FORM - LEFT SIDE */}
        <div className='w-full lg:w-1/2 p-4 sm:p-8 flex flex-col'>
          {/* LOGO */}
          <div className='mb-4 flex items-center justify-start gap-2'>
            <svg className='size-9' viewBox="0 0 100 147" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="50" cy="94" rx="50" ry="53" className='fill-primary' />
              <ellipse cx="25.7992" cy="91.4002" rx="13.5" ry="21.5" transform="rotate(-9.30643 25.7992 91.4002)" className='fill-base-300' />
              <ellipse cx="72.0246" cy="91.9912" rx="13.5" ry="21.5" transform="rotate(13.0375 72.0246 91.9912)" className='fill-base-300' />
              <circle cx="15.5" cy="15.5" r="15.5" className='fill-primary' />
              <circle cx="84.5" cy="15.5" r="15.5" className='fill-primary' />
              <rect x="8" y="15.6983" width="12" height="39" transform="rotate(-23.0495 8 15.6983)" className='fill-primary' />
              <rect x="77.8413" y="20" width="12" height="39" transform="rotate(32.3027 77.8413 20)" className='fill-primary' />
            </svg>
            <span className='text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary tracking-wider'>Toksy</span>
          </div>

          {/* ERROR MESSAGE IF ANY */}
          {error && (
            <div className='alert alert-error mb-4'>
              <span>{error.response.data.message}</span>
            </div>
          )}

          <div className='w-full'>
            <form onSubmit={handleSignup}>
              <div className='space-y-4'>
                <div>
                  <h2 className='text-xl font-semibold'>Create an Account</h2>
                  <p className='text-sm opacity-70'>
                    Join Toksy and start your language learning adventure!
                  </p>
                </div>

                <div className='space-y-3'>
                  {/* FULLNAME */}
                  <div className='form-control w-full'>
                    <label className='label'>
                      <span className='label-text'>Full Name</span>
                    </label>
                    <input type="text"
                      placeholder='Enter Name..'
                      className='input input-bordered w-full'
                      value={signupData.fullName}
                      onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                      required
                    />
                  </div>
                  {/* EMAIL */}
                  <div className='form-control w-full'>
                    <label className='label'>
                      <span className='label-text'>Email</span>
                    </label>
                    <input type="email"
                      placeholder='Enter Email..'
                      className='input input-bordered w-full'
                      value={signupData.email}
                      onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                      required
                    />
                  </div>
                  {/* PASSWORD */}
                  <div className='form-control w-full'>
                    <label className='label'>
                      <span className='label-text'>Password</span>
                    </label>
                    <input type="password"
                      placeholder='Enter Password..'
                      className='input input-bordered w-full'
                      value={signupData.password}
                      onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                      required
                    />
                    <p className='text-xs opacity-70 mt-1'>
                      Password must be at least 6 characters long
                    </p>
                  </div>

                  <div className='form-control'>
                    <label className='label cursor-pointer justify-start gap-2'>
                      <input type="checkbox" className='checkbox checkbox-sm' required />
                      <span className='text-xs leading-tight'>
                        I agree to the{" "}
                        <span className='text-primary hover:underline'>terms of service</span> and{" "}
                        <span className='text-primary hover:underline'>privacy policy</span>
                      </span>
                    </label>
                  </div>
                </div>

                <button className='btn btn-primary w-full' type='submit'>
                  {isPending ? (
                    <>
                      <span className='loading loading-spinner loading-xs'></span>
                      Loading...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>

                <div className='text-center mt-4'>
                  <p className='text-sm'>
                    Already have an account?{" "}
                    <Link to="/login" className='text-primary hover:underline'>
                      Sign in</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* SIGNUP FORM - RIGHT SIDE */}
        <div className='hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center'>
          <div className='max-w-md p-8'>
            {/* Illustration */}
            <div className='relative aspect-square max-w-sm mx-auto'>
              <img src="https://res.cloudinary.com/dwf7aydzq/image/upload/v1751833870/Video_call-bro_dho3sg.svg" alt="Language connection illustration" className='w-full h-full' />
            </div>

            <div className='text-center space-y-3 mt-6'>
              <h2 className='text-xl font-semibold'>Connect with language partners worldwide</h2>
              <p className='opacity-70'>
                Practice conversations, make friends, and improve your language skills together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
import Input from '@/Components/TextInput';
// import Label from '@/Components/InputLabel';
// import Button from '@/Components/PrimaryButton';
// import * as Button from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Login(){
    return <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
    <div className="fixed top-[-50px] hidden lg:block">
        <img src="/images/signup-image.png"
            className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt=""/>
    </div>
    <div className="py-24 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
        <div>
            <img src="/images/moonton-white.svg" alt=""/>
            <div className="my-[70px]">
                <div className="font-semibold text-[26px] mb-3">
                    Welcome Back
                </div>
                <p className="text-base text-[#767676] leading-7">
                    Explore our new movies and get <br/>
                    the better insight for your life
                </p>
            </div>
            <form className="w-[370px]">
                <div className="flex flex-col gap-6">
                <div>
                    <label className="text-base block mb-2">Email Address
                    </label>
                    <Input type="email" name="email" placeholder="Email Address" />
                </div>
                <div>
                            <label class="text-base block mb-2">Email Address</label>
                            <input type="email" name="email"
                                class="rounded-2xl bg-form-bg py-[13px] px-7 w-full focus:outline-alerange focus:outline-none"
                                placeholder="Email Address" />
                        </div>
                <div>
                    <label className="text-base block mb-2">Password</label>
                        <Input type="password" name="password" placeholder="Password" />
                    </div>
                </div>
                <div className="grid space-y-[14px] mt-[30px]">
                    {/* <Button type="button" variant="primary">
                        <span className="text-base font-semibold">
                            Start Watching
                        </span>
                    </Button>
                    
                    
                    <Button type="button" variant="light-outline">
                        <span className="text-base text-white">
                            Create New Account 2
                        </span>
                    </Button> */}
                    
                </div>
            </form>
        </div>
    </div>
</div>
}
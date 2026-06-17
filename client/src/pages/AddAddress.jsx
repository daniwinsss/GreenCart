import React ,{useState} from 'react'
import { motion } from 'framer-motion'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast';
import { useEffect } from 'react';
const InputField = (({type,placeholder,name,handleChange,address,delay})=>(
    <motion.input
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay }}
        className='w-full px-2 py-2.5 border border-gray-500/30 rounded outline-none text-gray-500 focus:border-primary transition'
        type={type}
        placeholder={placeholder}
        name={name} 
        onChange = {handleChange}
        value = {address[name]}
        required
    />
))
function AddAddress() {
    const {axios,user,navigate} = useAppContext();
    const [address, setAddress] = useState({
        firstName: '',
        lastName: '',
        street: '',
        email:'',
        phone: '',
        city: '',
        state: '',
        country: '',
        zipcode: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((prevAddress)=>({
            ...prevAddress,
            [name]: value
        }));
    }
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.post('api/address/add',{address});
            if(data.success){
                toast.success(data.message);
                navigate('/cart');
            }
            else{
                toast.error(data.message);
            }    
        
        } catch (error) {
            toast.error(error.message);
        }
    }
    useEffect(()=>{
        if(!user){
            navigate('/cart');
        }
    },[])
    return (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className='mt-16 pb-16'>
            <p className='text-2xl md:text-3xl text-gray-500'>Add Shipping 
                <span className='font-semibold text-primary'>Address</span>
            </p>
            <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className='flex-1 max-w-md'
                >
                    <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>
                        <div className='grid grid-cols-2 gap-4'>
                            <InputField handleChange = {handleChange} address = {address} name = 'firstName' type = 'text' placeholder = 'First Name' delay={0.2}/>
                            <InputField handleChange = {handleChange} address = {address} name = 'lastName' type = 'text' placeholder = 'Last Name' delay={0.25}/>
                        </div>
                        <InputField handleChange={handleChange} address={address} name='email' type="email" placeholder="Email address" delay={0.3}/>
                        <InputField handleChange={handleChange} address={address} name='street' type="text" placeholder="Street" delay={0.35}/>
                        <div className='grid grid-cols-2 gap-4'>
                            <InputField handleChange={handleChange} address={address} name='city' type="text" placeholder="City" delay={0.4}/>
                            <InputField handleChange={handleChange} address={address} name='state' type="text" placeholder="State" delay={0.45}/>
                        </div>
                        <div className='grid grid-cols-2 gap-4'>
                            <InputField handleChange={handleChange} address={address} name='zipcode' type="number" placeholder="Zip code" delay={0.5}/>
                            <InputField handleChange={handleChange} address={address} name='country' type="text" placeholder="Country" delay={0.55}/>
                        </div>
                        <InputField handleChange={handleChange} address={address} name='phone' type="text" placeholder="Phone" delay={0.6}/>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className='w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull transition cursor-pointer uppercase'
                        >
                            Save address
                        </motion.button>
                    </form>
                </motion.div>
                <motion.img
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className='md:mr-16 mb-16 md:mt-0'
                    src={assets.add_address_iamge}
                    alt="Add Address"
                />
            </div>
        </motion.div>
    )
}

export default AddAddress

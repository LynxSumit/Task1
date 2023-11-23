import "react-toastify/dist/ReactToastify.css";
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import { useForm } from 'react-hook-form';
import { fetchPost, submit } from './Reducers/FormSlice';
import { useDispatch } from 'react-redux';
import { Alert, TextField,  } from '@mui/material';
import { EmailRounded } from '@mui/icons-material';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';

export default function App() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
 

useEffect(() => {
  
dispatch(fetchPost())
}, [dispatch]);

  const submitHandler = async (data) => {
 
    dispatch(submit(data));
    reset();
  };
  function validatePhoneNumber(input) {
    input.target.value = input.target.value.replace(/\D/g, "");
  }
  return (
    <>
    <Box
      sx={{
        flex: 1,
        width: '100%',
      }}
    >
   
      <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: '800px',
          mx: 'auto',
          px: {
            xs: 2,
            md: 6,
          },
          py: {
            xs: 2,
            md: 3,
          },
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md" textAlign={"center"}>Profile Registration</Typography>
          
          </Box>
          <Divider />
          
          <form onSubmit={handleSubmit(submitHandler)}>
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
          >
            
            <Stack  spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Name</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                  <Input {...register("firstName", {required : true})} type='text' size="sm" placeholder="First name" />
                  {errors.firstName && <Alert severity='error'>First Name is required</Alert>}
                </FormControl>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                               <Input {...register("lastName")}  type='text' size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} />

                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input {...register("role", {required : true})} type='text' size="sm" defaultValue="UI Developer" />
                </FormControl>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                  {...register("email", {required : true})}
                    size="sm"
                    type="email"
                    startDecorator={<EmailRounded />}
                    placeholder="email"
                    defaultValue="siriwatk@test.com"
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
              </Stack>
              <Stack spacing={1}>
                <FormLabel>Password</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                  <Input {...register("password", {required : true})} type='password'  size="sm" placeholder="Password" />
                  {errors.password && <Alert severity='error'>Password  is required</Alert>}
                
                </FormControl>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                    <Input {...register("confirmPassword", {required : true})} type='password' size="sm" placeholder="Confirm Password" sx={{ flexGrow: 1 }} />
                  {errors.confirmPassword && <Alert severity='error'> Confirm Password  is required</Alert>}
                
                </FormControl>
              </Stack>
              <Stack spacing={1}>
                <FormLabel>Phone Number</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                  <TextField  onInput={validatePhoneNumber} variant='outlined' {...register("number", {required : true})}   
                  inputProps={{
                inputMode: "numeric",
                title: "Please enter a valid phone number",
                pattern: "[1-9]{1}[0-9]{9}",
                maxLength: 10,
              }}
             
              type="tel" size="sm"  />
                  {errors.number && <Alert severity='error'>Phone Number  is required</Alert>}
                  
                </FormControl>
              </Stack>
             
            </Stack>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
          >
            <Stack direction="row" spacing={2}>
             
              <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <FormLabel>Name</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                  <Input {...register("firstName", {required : true})}  size="sm" placeholder="First name" />
                  {errors.firstName && <Alert severity='error'>First Name is required</Alert>}
                
                </FormControl>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                                  <Input {...register("lastName")}  size="sm" placeholder="Last name" sx={{ flexGrow: 1 }} />

                
                </FormControl>
              </Stack>
            </Stack>

            <FormControl>
              <FormLabel>Role</FormLabel>
              <Input {...register("role", {required : true})} size="sm" defaultValue="UI Developer" />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Email</FormLabel>
              <Input
                  {...register("email", {required : true})}
                    size="sm"
                    type="email"
                    startDecorator={<EmailRounded />}
                    placeholder="email"
                    defaultValue="siriwatk@test.com"
                    sx={{ flexGrow: 1 }}
                  />
            </FormControl>

           




            <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <FormLabel>Password</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                 <Input {...register("password", {required : true})}  size="sm" placeholder="Password" />
                  {errors.password && <Alert severity='error'>Password  is required</Alert>}
                 
                
                </FormControl>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                 <Input {...register("confirmPassword", {required : true})}  size="sm" placeholder="Confirm Password" sx={{ flexGrow: 1 }} />
                  {errors.confirmPassword && <Alert severity='error'> Confirm Password  is required</Alert>}
                 
                
                </FormControl>
              </Stack>
            <Stack spacing={1} sx={{ flexGrow: 1 }}>
            <FormLabel>Phone Number</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                  <TextField
                  onInput={validatePhoneNumber} variant='outlined' {...register("number", {required : true})}   
                  inputProps={{
                inputMode: "numeric",
                title: "Please enter a valid phone number",
                pattern: "[1-9]{1}[0-9]{9}",
                maxLength: 10,
              }}
             
              type="tel" size="sm"  />
                  {errors.number && <Alert severity='error'>Phone Number  is required</Alert>}
                  
                </FormControl>
              </Stack>


          
          </Stack>
       
     
      
          <Divider />
          <Box sx={{ m :"1vmax 0" }}>
            <Typography level="title-md">Bio</Typography>
            <Typography level="body-sm">
              Write a short introduction to be displayed on your profile
            </Typography>
          </Box>
          <Stack spacing={2} sx={{ my: 1 }}>
          
            <Textarea
            {...register("bio")}
              size="sm"
              minRows={4}
              sx={{ mt: 1.5 }}
              defaultValue="Write a brief bio about youself"
            />
          </Stack>
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              
              <Button color='neutral' type='submit' size="sm" variant="solid">
                Submit
              </Button>
            </CardActions>
          </CardOverflow>
          </form>
        </Card>
       
      </Stack>
    </Box>

      <ToastContainer/>
    </>
  );
}
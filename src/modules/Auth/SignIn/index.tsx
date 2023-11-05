import { useCallback }                  from 'react';
import { Link, Navigate }               from 'react-router-dom';
import { useSelector }                  from 'react-redux';
import { useForm }                      from 'react-hook-form';
import { z }                            from 'zod';
import { zodResolver }                  from '@hookform/resolvers/zod';
import { Stack, TextField, Typography } from '@mui/material';
import { LoadingButton }                from '@mui/lab';
import { useSignInMutation }            from '@store/api/authApi';
import { IAppState }                    from '@store/index';
import { RtkError }                     from '@typings/error';
import { Password }                     from '@components/Password';
import { AuthContainer }                from '../components/AuthContainer';

const signInSchema = z.object({
  email   : z.string().email(),
  password: z.string().min(1)
});

type FormData = z.infer<typeof signInSchema>;

export const SignIn = () => {
  const accessToken             = useSelector((state: IAppState) => state.auth.accessToken);
  const [signIn, { isLoading }] = useSignInMutation();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email   : '',
      password: ''
    },
    resolver: zodResolver(signInSchema)
  });

  const onSubmit = useCallback(
    (values: FormData) => {
      signIn(values).unwrap()
        .catch((error: RtkError) => {
          if (error.data.code === 'user-not-found') {
            setError('email', { message: 'User not found' });
          }
          if (error.data.code === 'invalid-password') {
            setError('password', { message: 'Invalid password' });
          }
        });
    },
    [signIn, setError],
  );

  if (accessToken) return <Navigate to="/" />;

  return (
    <AuthContainer title="Sign in">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={6}>
          <Stack spacing={2}>
            <TextField
              label      = "Email"
              helperText = {errors.email?.message}
              error      = {!!errors.email}
              {...register('email')}
            />
            <Password
              label      = "Password"
              helperText = {errors.password?.message}
              error      = {!!errors.password}
              {...register('password')}
            />
          </Stack>
      
          <Stack spacing={4}>
            <LoadingButton
              type     = "submit"
              size     = "large"
              variant  = "contained"
              disabled = {isLoading}
              loading  = {isLoading}
            >
              Sign in
            </LoadingButton>
            <Typography textAlign="center" variant="body1">
              Don't have an account?
              {' '}
              <Link to="/auth/signup">Sign up</Link>
            </Typography>
          </Stack>
        </Stack>
      </form>
    </AuthContainer>
  );
};

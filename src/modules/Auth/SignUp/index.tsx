import { useCallback }                  from 'react';
import { Link, Navigate }               from 'react-router-dom';
import { useForm }                      from 'react-hook-form';
import { z }                            from 'zod';
import { zodResolver }                  from '@hookform/resolvers/zod';
import { Stack, TextField, Typography } from '@mui/material';
import { LoadingButton }                from '@mui/lab';
import { useSignUpMutation }            from '@store/api/authApi';
import { RtkError }                     from '@typings/error';
import { useSelf }                      from '@hooks/useSelf';
import { useAccessToken }               from '@hooks/useAccessToken';
import { AuthContainer }                from '@modules/Auth/components/AuthContainer';
import { Password }                     from '@components/Password';

const signUpSchema = z.object({
  username       : z.string().min(1),
  email          : z.string().email(),
  password       : z.string().min(1),
  confirmPassword: z.string().min(1)
}).superRefine((schema, ctx) => {
  if (schema.confirmPassword !== schema.password) {
    ctx.addIssue({
      path   : ['confirmPassword'],
      code   : 'custom',
      message: `Passwords don't match`
    });
  }
});

type FormData = z.infer<typeof signUpSchema>;

export const SignUp = () => {
  const { self }                = useSelf();
  const { setAccessToken }      = useAccessToken();
  const [signUp, { isLoading }] = useSignUpMutation();

  const {
    handleSubmit,
    register,
    setError,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email          : '',
      username       : '',
      password       : '',
      confirmPassword: ''
    },
    resolver: zodResolver(signUpSchema)
  });

  const onSubmit = useCallback(
    (values: FormData) => {
      signUp(values).unwrap()
        .then(({ accessToken }) => {
          setAccessToken(accessToken);
        })
        .catch((error: RtkError) => {
          if (error.data.code === 'email-not-unique') {
            setError('email', { message: 'Email is not unique' });
          }
          if (error.data.code === 'username-not-unique') {
            setError('username', { message: 'Username is not unique' });
          }
        });
    },
    [signUp, setError, setAccessToken],
  );

  if (self) return <Navigate to="/" />;

  return (
    <AuthContainer title="Sign up">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={6}>
          <Stack spacing={2}>
            <TextField
              label      = "Email"
              helperText = {errors.email?.message}
              error      = {!!errors.email}
              {...register('email')}
            />
            <TextField
              label      = "Username"
              helperText = {errors.username?.message}
              error      = {!!errors.username}
              {...register('username')}
            />
            <Password
              label      = "Password"
              helperText = {errors.password?.message}
              error      = {!!errors.password}
              {...register('password')}
            />
            <Password
              label      = "Confirm password"
              helperText = {errors.confirmPassword?.message}
              error      = {!!errors.confirmPassword}
              {...register('confirmPassword')}
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
              Sign up
            </LoadingButton>
            <Typography textAlign="center" variant="body1">
              Already have an account?
              {' '}
              <Link to="/auth/signin">Sign in</Link>
            </Typography>
          </Stack>
        </Stack>
      </form>
    </AuthContainer>
  );
};

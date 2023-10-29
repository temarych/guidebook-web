import { useState }   from 'react';
import {
  Dialog,
  DialogProps,
  Stack,
  Typography,
  styled,
}                     from '@mui/material';
import { IGuide }     from '@typings/guide';
import { IStep }      from '@typings/step';
import { ControlBar } from './ControlBar';
import { Header }     from './Header';

export interface PlayDialogProps extends Omit<DialogProps, 'fullScreen' | 'onClose' | 'maxWidth'> {
  steps   : IStep[];
  guide   : IGuide;
  onClose?: () => void;
}

export const PlayDialog = ({
  steps,
  guide,
  ...props
}: PlayDialogProps) => {
  const [stepIndex, setStepIndex] = useState(0);

  if (!steps.length) return null;

  const step = steps[stepIndex];

  return (
    <Dialog {...props} fullScreen PaperProps={{ elevation: 0 }}>
      <Header onClose={props.onClose} />

      <Wrapper>
        <Container>
          <Image src={step.image} />
    
          <Stack spacing={1}>
            <Typography variant="body2">
              {`${guide.emoji} ${guide.title}`}
            </Typography>
            <Typography variant="h6">
              {step.title}
            </Typography>
          </Stack>
    
          <Typography variant="body1">
            {step.description}
          </Typography>
        </Container>
      </Wrapper>

      <ControlBar
        stepIndex  = {stepIndex}
        stepsCount = {steps.length}
        onNext     = {() => setStepIndex(stepIndex + 1)}
        onBack     = {() => setStepIndex(stepIndex - 1)}
      />
    </Dialog>
  );
};

const Image = styled('img')`
  aspect-ratio : 1;
  width        : 18rem;
  align-self   : center;
  border-radius: 1rem;
  object-fit   : cover;
`;

const Wrapper = styled('div')`
  display       : flex;
  flex-direction: column;
  align-items   : center;
  flex          : 1;
  overflow      : scroll;
  padding-left  : ${({ theme }) => theme.spacing(2)};
  padding-right : ${({ theme }) => theme.spacing(2)};
  padding-top   : ${({ theme }) => theme.spacing(4)};
  padding-bottom: ${({ theme }) => theme.spacing(4)};
`;

const Container = styled('div')`
  display       : flex;
  flex-direction: column;
  width         : 100%;
  max-width     : var(--main-max-width);
  gap           : ${({ theme }) => theme.spacing(4)};
`;

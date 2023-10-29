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

export interface PlayDialogProps extends Omit<DialogProps, 'fullScreen' | 'onClose'> {
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

      <Stack p={2} spacing={4} flex={1} overflow="scroll">
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
      </Stack>

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
  border-radius: 1rem;
  object-fit   : cover;
`;

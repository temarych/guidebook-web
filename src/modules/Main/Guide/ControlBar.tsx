import { IconButton, MobileStepper, Paper, styled } from '@mui/material';
import { ChevronLeft, ChevronRight }                from '@mui/icons-material';

export interface ControlBarProps {
  stepIndex : number;
  stepsCount: number;
  onNext?   : () => void;
  onBack?   : () => void;
}

export const ControlBar = ({
  stepIndex,
  stepsCount,
  onNext,
  onBack
}: ControlBarProps) => (
  <>
    <Placeholder />
    <Wrapper variant="outlined">
      <StyledMobileStepper
        position   = "static"
        steps      = {stepsCount}
        variant    = "text"
        activeStep = {stepIndex}
        nextButton = {(
          <IconButton
            onClick  = {onNext}
            disabled = {stepIndex === stepsCount - 1}
          >
            <ChevronRight fontSize="large" />
          </IconButton>
        )}
        backButton = {(
          <IconButton
            onClick  = {onBack}
            disabled = {stepIndex === 0}
          >
            <ChevronLeft fontSize="large" />
          </IconButton>
        )}
      />
    </Wrapper>
  </>
);

const StyledMobileStepper = styled(MobileStepper)`
  height   : 100%;
  width    : 100%;
  max-width: var(--main-max-width);
  padding  : 0;
`;

const Placeholder = styled('div')`
  height: 4rem;
`;

const Wrapper = styled(Paper)`
  position      : fixed;
  border-left   : 0;
  border-right  : 0;
  border-bottom : 0;
  border-radius : 0;
  left          : 0;
  right         : 0;
  bottom        : 0;
  height        : 4rem;
  display       : flex;
  flex-direction: column;
  align-items   : center;
  padding-left  : ${({ theme }) => theme.spacing(2)};
  padding-right : ${({ theme }) => theme.spacing(2)};
`;

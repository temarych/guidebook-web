import { useCallback }                   from 'react';
import {
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
  useTheme,
}                                        from '@mui/material';
import { Computer, DarkMode, LightMode, Smartphone } from '@mui/icons-material';
import { useMode }                       from '@hooks/useMode';
import { IMode }                         from '@typings/mode';

export const ModeSwitch = () => {
  const theme             = useTheme();
  const isMobile          = useMediaQuery(theme.breakpoints.down('sm'));
  const { mode, setMode } = useMode();

  const handleChange = useCallback(
    (_: unknown, value: IMode | null) => {
      if (value !== null) {
        setMode(value);
      }
    },
    [setMode],
  );

  return (
    <ToggleButtonGroup
      exclusive
      value    = {mode}
      onChange = {handleChange}
    >
      <ToggleButton value="light">
        <LightMode fontSize="small" />
      </ToggleButton>
      <ToggleButton value="system">
        {isMobile ? (
          <Smartphone fontSize="small" />
        ) : (
          <Computer fontSize="small" />
        )}
      </ToggleButton>
      <ToggleButton value="dark">
        <DarkMode fontSize="small" />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

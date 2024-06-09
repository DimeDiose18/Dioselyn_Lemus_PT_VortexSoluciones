
import { styled } from '@mui/material/styles';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
}));

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

const Tools = () => {
  return (
    <>
      <StyledSpeedDial
        ariaLabel="SpeedDial playground example"
        hidden={false}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        direction="right"
        sx={{ position: 'relative',top: 0, right: 0, width: 'fit-content'}}
      >
        {actions.map((action) => (
          <SpeedDialAction

            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </StyledSpeedDial>
    </>
  );
}
export {Tools}
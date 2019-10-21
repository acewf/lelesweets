import { Typography } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

function ResponsiveTypography(props) {
  if (isWidthUp('sm', props.width)) {
    console.log('SM PROPS')
    return <Typography {...props} align="center" />
  }

  return <Typography {...props} />;
}

export default withWidth()(ResponsiveTypography);
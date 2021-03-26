import * as React from 'react';
import { DefaultPalette} from '@fluentui/react';
import { Stack, IStackStyles, IStackTokens, IStackItemStyles } from 'office-ui-fabric-react/lib/Stack'
import { Text } from 'office-ui-fabric-react/lib/Text';
// Styles definition
const stackStyles: IStackStyles = {
  root: {
    background: DefaultPalette.themeTertiary,
  },
};
const stackItemStyles: IStackItemStyles = {
  root: {
    alignItems: 'center',
    background: DefaultPalette.themePrimary,
    color: DefaultPalette.white,
    display: 'flex',
    height: 55,
    margin:0,
  },
};
const stackItemStyles2: IStackItemStyles = {
  root: {
    alignItems: 'center',
    background: DefaultPalette.themePrimary,
    color: DefaultPalette.white,
    display: 'flex',
    height: 55,
    margin:0,
    justifyContent:'flex-end',
  },
};
// Tokens definition
const stackTokens: IStackTokens = {
  childrenGap: 0,
};
const stackStyles2 : IStackStyles = {
  root: {
    marginLeft: '20px',
    height: '100%',
    alignItems:'center',
  }
}
const stackStyles3: IStackStyles = {
  root: {
    marginRight:'8px',
    height: '100%',
    alignItems:'center',
    justifyContent:'center',
  }
}

export default function Navbar(props){
  return (
    <Stack horizontal styles={stackStyles} tokens={stackTokens}>
      <Stack.Item grow={3} styles={stackItemStyles}>
        <Stack horizontal styles={stackStyles2}>
          <Text variant='xLarge' styles={{root:{fontFamily:'Noto Sans'}}}>Lookup Microsoft Graph Request </Text>
        </Stack>
      </Stack.Item>
      <Stack.Item grow={2} styles={stackItemStyles2}>
        <Stack horizontal styles={stackStyles3} tokens={stackTokens}>
          <Text variant='mediumPlus' styles={{root:{marginRight:'60px',fontFamily:'Noto Sans'}}}>Throttle Info</Text>
          <Text variant='mediumPlus' styles={{root:{marginRight:'60px'}}}>Lateral Escalation</Text>
          <Text variant='mediumPlus' styles={{root:{marginRight:'60px'}}}>Version 0.0.2</Text>
          {props.isAuthenticated==true?<Text variant='mediumPlus' styles={{root:{marginRight:'20px',cursor:'pointer'}}}>Sign Out</Text>:
          <Text onClick={()=>{props.onLogin()}} variant='mediumPlus' styles={{root:{marginRight:'20px',cursor:'pointer'}}}>Sign In</Text>}
          <Text></Text>
        </Stack>
      </Stack.Item>
    </Stack>
  );
};
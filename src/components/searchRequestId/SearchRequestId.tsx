import * as React from 'react';
import {useState} from 'react';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { Stack, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react';
import { DefaultPalette } from 'office-ui-fabric-react/lib/Styling';
import { IStackStyles } from 'office-ui-fabric-react/lib/Stack';
import Datetime  from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import "./SearchRequest.css";

const verticalGapStackTokens: IStackTokens = {
  childrenGap: 11,  
};

const stackStyles: IStackStyles= {
  root:{
    display: 'flex',
    marginTop:'20px',
    marginLeft:'15px',
  }
}

const verticalGapStackTokens1: IStackTokens = {
  childrenGap: 4
};

 

export default function SearchRequestId(props) {
  
 
  return (
      <Stack styles={stackStyles}>
      <Stack tokens={verticalGapStackTokens}>
        <Stack tokens={verticalGapStackTokens1}>
          <Text variant="smallPlus" nowrap block styles={{ root: { fontWeight: 600 } }}>
            Request id
          </Text>
          <TextField placeholder="Enter a request or correlation id" styles={{ root: { width: 300 } }} onChange={props.onChangeReqIDFieldValue} />
        </Stack>
        <Stack tokens={verticalGapStackTokens1}>
          <Text variant="smallPlus" nowrap block styles={{ root: { fontWeight: 600 } }}>
          Client Request-id (Graph Request-id):
          </Text>
          <TextField placeholder="Enter a request or correlation id" styles={{ root: { width: 300 } }} onChange={props.onChangeReqIDFieldValue} />
        </Stack>
        <Stack tokens={verticalGapStackTokens1}>
          <Text variant="smallPlus" nowrap block styles={{ root: { fontWeight: 600 } }}>
            Correlation Vector
          </Text>
          <TextField placeholder="Enter a request or correlation id" styles={{ root: { width: 300 } }} onChange={props.onChangeReqIDFieldValue} />
        </Stack>
        <Stack tokens={verticalGapStackTokens1}>
          <Text variant="smallPlus" nowrap block styles={{ root: { fontWeight: 600 } }}>
            Tenant Id
          </Text>
          <TextField placeholder="Enter a request or correlation id" styles={{ root: { width: 300 } }} onChange={props.onChangeReqIDFieldValue} />
        </Stack>
        <Stack tokens={verticalGapStackTokens1}>
          <Text variant="smallPlus" nowrap block styles={{ root: { fontWeight: 600 } }}>
            App Id
          </Text>
          <TextField placeholder="Enter a request or correlation id" styles={{ root: { width: 300 } }} onChange={props.onChangeReqIDFieldValue} />
        </Stack>
        <Stack tokens={verticalGapStackTokens1}>
          <Text variant="smallPlus" nowrap block styles={{ root: { fontWeight: 600 } }}>
            Start Time
        </Text>
          <Stack horizontal styles={{root:{marginBottom:'10px'}}}>
            <Datetime dateFormat={"yyyy-MM-DD"} timeFormat={"TH:MM"} onChange={props.onChangeStartDateTime} initialValue={new Date()} className="dateTimeStyle"/>
          </Stack>
        </Stack>
        <Stack tokens={verticalGapStackTokens1}>
          <Text variant="smallPlus" nowrap block styles={{ root: { fontWeight: 600 } }}>
            End Time
        </Text>
          <Stack horizontal styles={{root:{marginBottom:'10px'}}}>
            <Datetime dateFormat={"yyyy-MM-DD"} timeFormat={"TH:MM"} onChange={props.onChangeEndDateTime} initialValue={new Date()} className="dateTimeStyle"/>
          </Stack>
        </Stack>

        <PrimaryButton text="Search" styles={{ root: { width: 80, backgroundColor: DefaultPalette.neutralPrimaryAlt } }} onClick={props.onClick} />
      </Stack>
      </Stack>
  )
}

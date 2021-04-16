import * as React from "react";
import { useState,useEffect } from 'react';
import { hot } from "react-hot-loader";
import { Stack, IStackItemStyles, IStackTokens } from 'office-ui-fabric-react/lib/Stack';
import SearchRequestId from './searchRequestId/SearchRequestId';
import '../assets/scss/App.scss';
import { resultsData } from '../mockData/mockData'
import LogData from './logData/LogData';
import Navbar from './nav/Navbar';
import moment from 'moment';
import {config} from '../Config'
import {PublicClientApplication} from '@azure/msal-browser';
import { Text } from 'office-ui-fabric-react/lib/Text';

const verticalGapStackTokens2: IStackTokens = {
  childrenGap: 40
};

const stackItemStyles: IStackItemStyles = {
  root: {
    marginRight:'20px',
    width:'80%',
  },
};

const VerticalStackBasicExample: React.FunctionComponent = () => {

  const [resultsFetched, setResultsFetched] = useState(false);
  const [logData, setLogData] = useState(resultsData);
  const [startTime, setStartTime] = useState(moment().format());
  const [endTime, setEndTime] = useState(moment().format());
  const [reqIDFieldValue, setReqIDFieldValue] = React.useState('');
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user,setUser] = useState({});
  const [username, setUsername]= useState("");

  var publicClientApplication;
  useEffect(() => {
   
     publicClientApplication = new PublicClientApplication({
      auth: {
        clientId: config.appId,
        redirectUri: config.redirectUri,
        authority: config.authority
      },
      cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: true
      },
    });
    
  }, [])

  async function login() {
    try {
      // Login via popup  
      publicClientApplication.loginPopup(
        {
          scopes: config.scopes,
          prompt: "select_account"
        }).then((res)=>{
          console.log(res);
          setIsAuthenticated(true);
          setUsername(res.idTokenClaims.name);
        });
      

    }
    catch (err) {

      setIsAuthenticated(false);
      setError(err);
    }
  }
  
  const onChangeReqIDFieldValue = React.useCallback(
    (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, newValue?: string) => {
      setReqIDFieldValue(newValue || '');
    },
    [],
  );

  const onChangeStartDateTime=(date)=>{
    
    setStartTime(date.format());
  }

  const onChangeEndDateTime=(date)=>{
    
    setEndTime(date.format());
  }

  function _onClick() {

    function addMinutes(date, minutes) {
      return new Date(date.getTime() + minutes * 60000);
    }

    const currDate = new Date();

  //  const startDate = addMinutes(currDate, -15);
   // const endDate = addMinutes(currDate, 15);
    console.log(`https://localhost:44388/api/Logs/${reqIDFieldValue}?startDate=${startTime}&endDate=${endTime}`);

    // https://localhost:44388/api/Logs/0ac1a787-b133-4cb9-8fc8-d9b1db9f323f?
    // startDate=2020-11-10T14:53:02.148Z&endDate=2020-11-10T15:23:02.148Z

    //https://localhost:44388/api/logs/0ac1a787-b133-4cb9-8fc8-d9b1db9f323f
    // ?startDate=2020-11-03T06:20:00.000Z&endDate=2020-11-03T18:20:00.000Z

    // fetch(`https://localhost:44388/api/Logs/${reqIDFieldValue}?startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}`)
    //fetch(`https://localhost:44388/api/Logs/${reqIDFieldValue}?startDate=${startTime}&endDate=${endTime}`)
    fetch(`https://www.google.com/search?q=a+mock+url+for+get+request&rlz=1C1CHBF_enIN933IN933&sxsrf=ALeKk03YHWzOzLqaGaEKKiI7R0a44qys7Q%3A1618562677167&ei=dU55YO7iCeyY4-EP1bO8kAs&oq=a+mock+url+for+get+request&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOgcIIxDqAhAnOgcILhDqAhAnOgQIIxAnOgQILhAnOgUIABCRAjoICAAQsQMQgwE6BAguEEM6BAgAEEM6BQguELEDOgUIABCxAzoCCAA6AgguOggILhCxAxCDAToHCC4QQxCTAjoHCC4QsQMQQzoECAAQCjoHCAAQhwIQFDoGCAAQFhAeOggIABAWEAoQHjoICCEQFhAdEB5QwSpYi1Zg61hoAXACeACAAb4BiAHNHZIBBDAuMjeYAQCgAQGqAQdnd3Mtd2l6sAEKwAEB&sclient=gws-wiz&ved=0ahUKEwiu8azrr4LwAhVszDgGHdUZD7IQ4dUDCA4&uact=5`)
      .then(response => response.json())
      .then(resultsData => {
        console.log("message",resultsData.graphLog.message);
        setLogData(resultsData);
        setResultsFetched(true);
      });
  }

  return (
    <>
    <Navbar isAuthenticated={isAuthenticated} onLogin={login} username={username}/>
    <Stack horizontal styles={{root:{height: '92.5%'}}} tokens={verticalGapStackTokens2}>
      <Stack.Item styles={{root:{backgroundColor:'#faf9f8',width:'20%'}}}>
      <SearchRequestId onClick={_onClick} onChangeReqIDFieldValue={onChangeReqIDFieldValue} onChangeStartDateTime={onChangeStartDateTime} onChangeEndDateTime={onChangeEndDateTime} />
      </Stack.Item>
      <Stack.Item styles={stackItemStyles}>
    {/* {resultsFetched==false?<Stack styles={{root:{marginTop:'5px'}}}><Text variant="mediumPlus"> Telemetry is currently logged under the following circumstances:</Text></Stack>:null} */}
      {resultsFetched && (<LogData logData={logData} setResultsFetched= {setResultsFetched} />)}
      </Stack.Item>
    </Stack>
    </>
  );
};

declare let module: Record<string, unknown>;

export default hot(module)(VerticalStackBasicExample);

import * as React from 'react'
import { Stack, IStackStyles, IStackTokens, StackItem } from 'office-ui-fabric-react/lib/Stack';


const navStackStyles: IStackStyles = {
    root: {
        width: '200px',
        height: '40px',
        color: 'white',
        backgroundColor:'rgba(255, 0, 0, 0.4)',
        borderRadius:'5px',
        fontFamily:'Noto Sans',
        padding:'1px',
        display:'flex',
        justifyContent:'center',
        fontSize:'18px',
        paddingLeft:'10px',
        fontWeight:'500',
        marginBottom:'10px'
    }
}

export default function NotificationBox(props) {
    
    var color=props.request === "failiure"?'rgba(255, 0, 0, 0.4)':'rgb(0,128,0,0.4)';

    return (
        <Stack style={{backgroundColor:color}}styles={navStackStyles}>
            {props.text}
        </Stack>
    )
}

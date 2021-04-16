import * as React from 'react';
import { useState } from 'react';
import { Stack, IStackStyles, IStackTokens, StackItem } from 'office-ui-fabric-react/lib/Stack';
import { Text } from 'office-ui-fabric-react/lib/Text';

export default function ReadMore(props) {


    const [showMore, setShowMore] = useState(false);

        
    return (
        <Stack>
            {props.completeText?.toString().length > 300 ?
                <>{showMore == false ?
                    <Stack>{console.log('false')}<Text styles={{ root: { fontFamily: 'Noto Sans'}}}>{props.completeText?.toString().substring(0, props.length)}</Text>
                        <Text  variant="smallPlus" styles={{ root: { fontFamily: 'Noto Sans',color:'rgb(0, 120, 212)',cursor:'pointer',padding:'1px', } }} onClick={() => { setShowMore(true) }}>Show More</Text></Stack>
                    :
                    <Stack>{console.log('true')}
                        <Text styles={{ root: { fontFamily: 'Noto Sans'}}}> {props.completeText }</Text>
                        <Text variant="smallPlus" styles={{ root: { fontFamily: 'Noto Sans',color:'rgb(0, 120, 212)',cursor:'pointer',padding:'1px', } }} onClick={() => { setShowMore(false) }}>Show Less</Text>
                    </Stack>
                }</>
                :
                <Stack><Text styles={{ root: { fontFamily: 'Noto Sans'}}}> {console.log('skipped')}{props.completeText }</Text></Stack>
            }
        </Stack>
    )
}

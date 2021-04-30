import React from 'react'
// import BasicRow from "../BasicRow/index"
import {Table,TR,TH,Tbody} from "../Table/index"
function index(props) {
    return (
        // <div className="container-fluid">
            <div className="container">
                <Table>
                    <Tbody>
                    <TR className="row-heading" rowStyle={{backgroundColor:"#EAF4EF"}}>
                        <TH>{props.firstHeading}</TH>
                        <TH>{props.secondHeading}</TH>
                        <TH>{props.thirdHeading}</TH>
                        <TH>{props.fourthHeading}</TH>
                    </TR>
                    {props.BasicRow}
                    </Tbody>
                </Table>
            </div>
        // </div>
    )
}
export default index
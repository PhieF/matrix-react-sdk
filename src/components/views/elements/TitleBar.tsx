/*

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from "react";
import PlatformPeg from "../../../PlatformPeg";

interface IProps {}

export default class TitleBat extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props);
    }

    minimize(){
        PlatformPeg.get().minimize()
      
    }

    maximize(){
        PlatformPeg.get().maximize()
    }

    close(){
        PlatformPeg.get().close()
    }

    render() {
        if(navigator.userAgent.toLowerCase().indexOf(' electron/') > -1)
            return (
                <div className="mx_MatrixTitleBar">
                    <div className="mx_MatrixTitleBar_buttons">
                        <img onClick={this.minimize} alt="minimize" className="mx_MatrixTitleBar_buttonMinimize" />
                        <img onClick={this.maximize} alt="maximize" className="mx_MatrixTitleBar_buttonMaximize" />
                        <img onClick={this.close} alt="close" className="mx_MatrixTitleBar_buttonClose" />
                    </div>
                </div>
            );
            else return null
    };
}

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var options = {
            databaseXmlFile: 'PluginTest.xml',
            targetList: ['logo', 'iceland', 'canterbury-grass', 'brick-lane'],
            overlayMessage: 'Point your camera at a test image...',
            vuforiaLicense: 'Abcfe0z/////AAAAGUZRlZ9HoUKTpC5BXqrO7/cNt0igXyjooxqDuYV2c84hANKzr3r1+QPz78PhXSjeQqYPa/osbF0kW9cTDhrkHB2HlKzcwAZNtg2L5UGLXveXd4czBpnesAnLuRgOux3PEu6oS6CTUtHeD/9+awBsLB2N/eqhotJ1liNhndm/xKIcITAN+K5HNvp+eGqtOLW1L0pN2HqAAOT87/Jm+6VOyl1NJ6YAbOmClS19awxPtdaoLxkaAMLOwLDA3ncprbwMCANimpB66NoE9hzqwCvwrn7NYg6/WhAXL8CsEazpEgInMvO9R2JnUJA6Gvafae/lbzulOXH2JwUA7kBlezwpTO2dd1/jat7ExYzHjHiX99FH'
        };

        navigator.VuforiaBackgroundPlugin.launchVuforia(
                options,
                function (data) {
                    // To see exactly what `data` can return, see 'Success callback `data` API' within the plugin's documentation.
                    console.log(data);

                    if (data.status.manuallyClosed) {
                        navigator.app.exitApp();
                    }
                },
                function (data) {
                    alert("Error: " + data);
                }
        );
    }
};

app.initialize();
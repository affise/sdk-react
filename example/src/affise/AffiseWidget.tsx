import React, {Component} from "react";
import {Button, FlatList, View} from "react-native";
import {AffiseEvent, BaseSubscriptionEvent} from 'affise-attribution-lib';
import {DefaultEventsFactory} from "./DefaultEventsFactory";


export class AffiseWidget extends Component {
    events: AffiseEvent[];

    constructor(props: { events: AffiseEvent[] }) {
        super(props);
        this.events = new DefaultEventsFactory().createEvents();
    }

    render() {
        return (
            <FlatList
                style={{width: '100%', padding: 8}}
                ItemSeparatorComponent={() => <View style={{height: 8}}/>}
                data={this.events}
                renderItem={({item}) => (
                    <Button
                        color={(item instanceof BaseSubscriptionEvent) ? "#F44336" : "#2196F3"}
                        title={toName(item.constructor.name)}
                        onPress={() => {
                            // Events tracking https://github.com/affise/sdk-react#events-tracking
                            // Send event
                            item.send();
                            // or
                            // Affise.sendEvent(item);
                            // or
                            // item.sendNow(() => {
                            //     console.log(`success: ${item.constructor.name}`);
                            // }, (status) => {
                            //     console.log(`failed: ${item.constructor.name} status: ${status}`);
                            // });
                        }}
                    ></Button>
                )}
            />
        );
    }
}

function toName(text: string): string {
    return text
        .replace('Event', '')
        .replace(/(?<=.)([A-Z]|\d+)/g, letter => ` ${letter}`);
}

/**
 * React Native News App
 * https://github.com/tengontheway/ReactNativeNews
 * @Evil.T
 */
'use strict';

import React, { Component } from 'react';
import NewsList from './NewsList';

import {
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS,
} from 'react-native';

var TabBarItemIOS = TabBarIOS.Item;

export default class TabBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'tab1'
        };
    }

    render() {
        return (
            <TabBarIOS>
                <TabBarItemIOS
                    selected = {this.state.selectedTab === 'tab1'}
                    systemIcon='favorites'
                    title="收集"
                    accessibilityLabel='所有的收集'
                    onPress={() => {
                        this.setState({
                            selectedTab: 'tab1',
                        });
                    } }
                    >
                    <NavigatorIOS
                        initialRoute={{
                            component: NewsList,
                            title: '收集',
                        }}>
                    </NavigatorIOS>
                </TabBarItemIOS>
                <TabBarItemIOS
                    selected = {this.state.selectedTab === 'tab2'}
                    title="历史"
                    systemIcon='history'
                    accessibilityLabel='所有的历史'
                    onPress={() => {
                        this.setState({
                            selectedTab: 'tab2',
                        });
                    } }
                    >
                    <Text>tab2</Text>
                </TabBarItemIOS>
                <TabBarItemIOS
                    selected = {this.state.selectedTab === 'tab3'}
                    title="更多"
                    systemIcon='more'
                    accessibilityLabel='所有的更多'
                    onPress={() => {
                        this.setState({
                            selectedTab: 'tab3',
                        });
                    } }
                    >
                    <Text>tab3</Text>
                </TabBarItemIOS>
            </TabBarIOS >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        color: 'red',
    }
});

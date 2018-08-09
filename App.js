/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge, Left, Right, Body, Title } from 'native-base';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      appTab: true,
      cameraTab: false,
      negativeTab: false,
      contactTab: false
    };
  }

  toggleAppTab() {
    this.setState({
      appTab: true,
      cameraTab: false,
      negativeTab: false,
      contactTab: false
    });
  }

  toggleCameraTab() {
    this.setState({
      appTab: false,
      cameraTab: true,
      negativeTab: false,
      contactTab: false
    });
  }

  toggleNegativeTab() {
    this.setState({
      appTab: false,
      cameraTab: false,
      negativeTab: true,
      contactTab: false
    });
  }

  toggleContactTab() {
    this.setState({
      appTab: false,
      cameraTab: false,
      negativeTab: false,
      contactTab: true
    });
  }

  render() {
    return (
      <Container>
        <Header>
        <Left>
            <Button transparent /*onPress={() => this.props.navigation.goBack()}*/>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title style={{width: 200, height: null}}>Awesome Nativve Base</Title>
          </Body>
          <Right /> 
        </Header>
        <Content />
        <Footer>
          <FooterTab>
            <Button active={this.state.appTab} onPress={()=> this.toggleAppTab()} badge vertical>
              <Badge><Text>2</Text></Badge>
              <Icon name="apps" />
              <Text>Apps</Text>
            </Button>
            <Button active={this.state.cameraTab} onPress={()=> this.toggleCameraTab()} vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active={this.state.negativeTab} onPress={()=> this.toggleNegativeTab()} badge vertical>
              <Badge ><Text>51</Text></Badge>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button active={this.state.contactTab} onPress={()=> this.toggleContactTab()} vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
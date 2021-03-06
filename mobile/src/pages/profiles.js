import React from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';

function profiles ({ navigation }) {
    const githubUsername = navigation.getParam('github_username');
    
    return <WebView style={{ flex: 1 }} source={{ uri: `https://github.com/${githubUsername}`}} />
}

export default profiles;
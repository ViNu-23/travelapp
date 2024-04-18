import Colors from '@/constansts/Colors'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import { useState } from 'react';


export default function Page() {
  const [basic, setBasic] = useState(false);
  const [preferences, setPreferences] = useState(false);
  const [history, setHistory] = useState(false);
  const [settings, setSettings] = useState(false);
  const [savedItems, setSavedItems] = useState(false);
  const [feedback, setFeedback] = useState(false);

  return (
    <View style={styles.mainWrapper}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
            <Image source={{ uri: 'https://xsgames.co/randomusers/avatar.php?g=female' }}
              style={{ width: 50, height: 50, borderRadius: 10, }}
            />
            <Ionicons name='ellipsis-vertical' color={Colors.primaryColor} size={30} />
          </View>

          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.optionsHeading} onPress={() => setBasic(!basic)}>
              <Text style={styles.heading}>Basic Information</Text>
              <Ionicons name={basic ? 'remove' : 'add'} size={25} color={Colors.primaryColor} />
            </TouchableOpacity>

            {basic && (
              <View>
                <Text style={styles.semiOption}>Change name</Text>
                <Text style={styles.semiOption}>Profile picture</Text>
                <Text style={styles.semiOption}>Email address</Text>
                <Text style={styles.semiOption}>Contact number</Text>
              </View>
            )}
          </View>

          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.optionsHeading} onPress={() => setPreferences(!preferences)}>
              <Text style={styles.heading}>Personal Preferences</Text>
              <Ionicons name={preferences ? 'remove' : 'add'} size={25} color={Colors.primaryColor} />
            </TouchableOpacity>

            {preferences && (
              <View>
                <Text style={styles.semiOption}>Travel interests</Text>
                <Text style={styles.semiOption}>Preferred destinations</Text>
                <Text style={styles.semiOption}>Preferred travel dates</Text>
              </View>
            )}
          </View>

          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.optionsHeading} onPress={() => setHistory(!history)}>
              <Text style={styles.heading}>Travel History</Text>
              <Ionicons name={history ? 'remove' : 'add'} size={25} color={Colors.primaryColor} />
            </TouchableOpacity>

            {history && (
              <View>
                <Text>Past trips</Text>
                <Text>Ratings and reviews for visited destinations or accommodations</Text>
              </View>
            )}
          </View>

          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.optionsHeading} onPress={() => setSettings(!settings)}>
              <Text style={styles.heading}>Account Settings</Text>
              <Ionicons name={settings ? 'remove' : 'add'} size={25} color={Colors.primaryColor} />
            </TouchableOpacity>

            {settings && (
              <View>
                <Text style={styles.semiOption}>Change password</Text>
                <Text style={styles.semiOption}>Notification preferences</Text>
              </View>
            )}
          </View>

          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.optionsHeading} onPress={() => setSavedItems(!savedItems)}>
              <Text style={styles.heading}>Saved Items</Text>
              <Ionicons name={savedItems ? 'remove' : 'add'} size={25} color={Colors.primaryColor} />
            </TouchableOpacity>

            {savedItems && (
              <View>
                <Text style={styles.semiOption}>Saved destinations</Text>
                <Text style={styles.semiOption}>Saved accommodations</Text>
                <Text style={styles.semiOption}>Saved activities or tours</Text>
              </View>
            )}
          </View>

          <View style={styles.optionContainer}>
            <TouchableOpacity style={styles.optionsHeading} onPress={() => setFeedback(!feedback)}>
              <Text style={styles.heading}>Feedback and Support</Text>
              <Ionicons name={feedback ? 'remove' : 'add'} size={25} color={Colors.primaryColor} />
            </TouchableOpacity>

            {feedback && (
              <View>
                <Text style={styles.semiOption}>Provide feedback to the app developers</Text>
                <Text style={styles.semiOption}>Access to customer support or help center</Text>
              </View>
            )}
          </View>

          <View style={styles.logOut}>
            <TouchableOpacity
              onPress={() => { }}
              style={[styles.footerBtn, styles.footerBookBtn]}
            >
              <Text style={styles.footerBtnTxt}>Log out</Text>
            </TouchableOpacity>
          </View>

        </View>

      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: Colors.white
  },
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    justifyContent: 'space-between'
  },
  optionContainer: {

  },
  optionsHeading: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: Colors.primaryColor,
    marginVertical: 8
  },
  heading: {
    fontSize: 18,
    color: Colors.black,
    paddingVertical: 10,
  },
  semiOption: {
    fontSize: 16,
    color: Colors.primaryColor,
    paddingVertical: 4
  },
  footerBtn: {
    backgroundColor: Colors.black,
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  footerBookBtn: {
    backgroundColor: Colors.primaryColor,
  },
  footerBtnTxt: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    textTransform: "uppercase",
  },
  logOut: {
    marginTop: 20
  }
});

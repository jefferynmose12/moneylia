import React from "react";
import { Center, Heading, Text, Image, Box, VStack, Link } from "native-base";
import { CustomButton } from "../components/CustomButton";
import { colors } from "../assets/color";
import StatusBarCon from "../components/StatusBarCon";

export const LoginScreen = ({navigation} : any) => {

  const styles = {
    box : {
      flex : 1,
      backgroundColor : colors.white,
      paddingTop : 80,
      paddingHorizontal : 32,
    },
    headText : {
      color: colors.secondary,
      fontSize : 33,
      paddingTop : 3,
      fontFamily : 'WorkSans-SemiBold'
    },
    text : {
      color: colors.neutralPrimary,
      paddingTop : 3,
      fontSize : 13,
      fontFamily : 'WorkSans-Regular'
    },
    linkText : {
      color : colors.secondary,
      marginTop : 5,
    }
  }

  const handleClick = () => {
    navigation.navigate('Bottom')
  }
  
  return (
    <Box style={styles.box}>
      <StatusBarCon text='dark-content' bg={colors.white} />

      <VStack space={5} alignItems="center">
        <Center>
          <Image
            source={require(`../assets/images/woman.png`)}
            alt='woman'
            size={320}
          />
        </Center>

        <Center alignItems="center">
          <Heading style={styles.headText}>Save your money</Heading>
          <Text textAlign='center' style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Est in quis erat a sit.
          </Text>
        </Center>

        <Center mt={10}>
          <CustomButton text='Join for free' backgroundColor={colors.primary} px='70px' press={handleClick} />
          <Link href="https://nativebase.io" _text={styles.linkText}>
            Don't have SPID or CIE? Find out more
          </Link>
        </Center>
      </VStack>
    </Box>
  );
}
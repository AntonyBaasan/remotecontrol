import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    padding: 10,
  },
  label: {
    fontSize: 20,
    marginTop: 10,
  },
  input: {
    fontSize: 16,
    paddingLeft: 5,
    paddingRight: 5,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  button: {
    height: 50,
    backgroundColor: '#D63411',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonLabel: {
    fontSize: 26,
    color: '#fff',
  },
  resultText: {
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center',
  },
});


export default styles;

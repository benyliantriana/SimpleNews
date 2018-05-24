import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    marginTop: 2,
    padding: 10,
    backgroundColor: Colors.newsBackground,
    elevation: 1
  },
  images: {
    marginRight: 15,
    width: 75,
    height: 75,
    borderRadius: 4,
    resizeMode: 'cover'
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 5
  },
  textDate: {
    color: Colors.actionBar,
    fontSize: 10
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  columnContainer: {
    flexDirection: 'column',
    flex: 1
  },
  textTitle: {
    color: Colors.actionBar,
    marginBottom: 5
  },
  textDescription: {
    color: '#707070',
    marginTop: 2,
    fontSize: 12
  },
  titleSourceNews: {
    color: Colors.actionBar
  },
  descriptionSourceNews: {
    color: '#707070',
    marginTop: 2,
    fontSize: 12
  },
  rowSourceNews: {
    flexDirection: 'row',
    marginTop: 3
  },
  categorySourceNews: {
    color: Colors.actionBar,
    fontSize: 10
  }
})

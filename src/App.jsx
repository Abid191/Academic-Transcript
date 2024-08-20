import { Document, Image, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer'
import './App.css'

const styles = StyleSheet.create({
  page: {
    justifyContent: 'flex-start',
    padding: 30,
    position: 'relative',
  },
  Header: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  img: {
    width: 70,
  },
  H_Text: {
    fontSize: 22,
    marginLeft: 7
  },
  H_TextOne: {
    fontSize: 12,
    marginLeft: 7,
    marginTop: 3
  },
  Sub_Header: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  TwoTable: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  imgOne: {
    width: 62,
    marginTop: 14.5,
    height: 63,
  },
  Table: {
    marginTop: 14.5,
    display: 'table',
  },
  TableRow: {
    flexDirection: 'row',
    width: 'auto',
    // paddingHorizontal: 5
  },
  ForTable: {
    flexDirection: 'row',
  },
  TableCol: {
    width: 97.4,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 'auto',
    padding: 5,
    borderTopLeftRadius: 5,
  },
  TableColOne: {
    width: '92.3%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    height: 'auto',
    padding: 5,
  },
  TableColTwo: {
    width: 97.2,
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopWidth: 0,
    height: 'auto',
    padding: 5,
  },
  TableColThree: {
    width: '92%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    height: 'auto',
    padding: 5,
  },
  tableText: {
    fontSize: 8.7,
    width: 'auto',
  },
  tableTextRight: {
    fontSize: 8.7,
    width: 'auto',
  },
  TableRowOne: {
    flexDirection: 'row',
    width: 320,
  },
  TableColNew: {
    width: '27.5%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopWidth: 0,
    height: 'auto',
    padding: 5,
  },
  TableColNewB: {
    width: '27.5%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopWidth: 0,
    height: 'auto',
    padding: 5,
    borderBottomLeftRadius: 5
  },
  TableColNewOne: {
    width: '30%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    height: 'auto',
    padding: 5,

  },
  TableColNewTwo: {
    width: '30%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    height: 'auto',
    padding: 5,
    borderBottomRightRadius: 5
  },
  tableTextOne: {
    fontSize: 8.7,
    width: 'auto',
    textAlign: 'right'
  },
  tableTextTwo: {
    fontSize: 8.7,
    width: 'auto',
    textAlign: 'left'
  },
  RightTable: {
    marginTop: 10,
    display: 'table',
  },
  RightTableRow: {
    flexDirection: 'row',
    width: '70%',
    marginLeft: 60
  },
  RightTableCol: {
    width: '40%',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 'auto',
    padding: 5,
    backgroundColor: '#cedded',
  },
  RightTableColOne: {
    width: '40%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    height: 'auto',
    padding: 5,
    backgroundColor: '#cedded',
  },
  RightTableColTwo: {
    width: '40%',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 'auto',
    padding: 5,
    borderTopWidth: 0
  },
  RightTableColThree: {
    width: '40%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    height: 'auto',
    padding: 5,
  },
  Text: {
    fontSize: 7,
  },
  RightTextOne: {
    fontSize: 6
  },
  SecTable: {
    marginTop: 10,
    display: 'table',
  },
  SecTableRow: {
    flexDirection: 'row'
  },
  SecTableCol: {
    width: '10%',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 'auto',
    padding: 5,
  },
  SecTableColData: {
    width: '9.05%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopWidth: 0,
    height: 'auto',
    padding: 5,
  },
  SecTableColTotal: {
    width: '9.05%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderTopWidth: 0,
    height: 'auto',
    padding: 5,
  },
  SecTableColOne: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    height: 'auto',
    padding: 5,
  },
  SecTableColOneData: {
    width: '22.6%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    height: 'auto',
    padding: 4,
  },
  SecTableColOneTotal: {
    width: '22.6%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    height: 'auto',
    padding: 4,
  },
  SecTableColTwo: {
    width: '10%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    height: 'auto',
    padding: 5,
  },
  SecTableColTwoData: {
    width: '9.05%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    height: 'auto',
    padding: 4,
  },
  SecTableColTwoTotal: {
    width: '9.05%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    height: 'auto',
    padding: 4,
  },
  SecTableColTwoo: {
    width: '10%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    height: 'auto',
    padding: 5,
  },
  SecDoubleTable: {
    display: 'table',
  },
  SecTableDoubleRow: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    height: 'auto',
    padding: 5,
  },
  SecTableDoubleCol: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    height: 'auto',
    padding: 5,
  },
  SecText: {
    fontSize: 10,
    textAlign: 'center',
  },
  SecTextDouble: {
    fontSize: 10,
    marginLeft: 35
  },
  ExamRow: {
    flexDirection: 'row'
  },
  ExamCol: {
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    height: 'auto',
    paddingVertical: 2,
    paddingHorizontal: 10
  },
  ExamColDataOne: {
    width: '5.4%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    height: 'auto',
    padding: 5
  },
  ExamColDataOneTotal: {
    width: '5.4%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    height: 'auto',
    padding: 5
  },
  ExamColDataTwo: {
    width: '5.5%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    height: 'auto',
    padding: 5
  },
  ExamColDataTwoTotal: {
    width: '5.5%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    height: 'auto',
    padding: 5
  },
  ExamColDataThree: {
    width: '5.8%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    height: 'auto',
    padding: 5
  },
  ExamColDataThreeTotal: {
    width: '5.8%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    height: 'auto',
    padding: 5
  },
  ExamColDataFour: {
    width: '6.4%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    height: 'auto',
    padding: 5
  },
  ExamColDataFourTotal: {
    width: '6.4%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 0,
    height: 'auto',
    padding: 5
  },
  ExamSecText: {
    fontSize: 8,
  },
  SecTextData: {
    fontSize: 7,
    textAlign: 'center'
  },
  ThirdTableRow: {
    flexDirection: 'row',
  },
  ThirdTableCol: {
    width: '30%',
    borderStyle: 'solid',
    borderWidth: 1,
    height: 'auto',
    padding: 5,
  },
  ThirdTableColOne: {
    width: '30%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    height: 'auto',
    padding: 5,
  },
  ThirdTableColTwo: {
    width: '30%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderTopWidth: 0,
    height: 'auto',
    padding: 5,
  },
  ThirdTableColThree: {
    width: '30%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    height: 'auto',
    padding: 5,
  },
  ThirdTableColFour: {
    width: '15%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    height: 'auto',
    padding: 5,
  },
  ThirdTableText: {
    fontSize: 10,
    textAlign: 'center'
  },
  ThirdTableTextOne: {
    fontSize: 8.5,
    textAlign: 'center'
  },
  Remarks: {
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10
  },
  TextOne: {
    fontSize: 10,
  },
  footer: {
    flexDirection: 'row',
    position: 'absolute',
    display: 'block',
    bottom: 70,
    borderTop: ' 1px solid black',
    width: '100%',
    fontSize: 10,
    justifyContent: 'space-between',
    // marginTop: 20,
    marginLeft: 30,
  },
  footerText: {
    fontSize: 8,
    marginTop: 5,
    marginLeft: 0
  },
  pageNumber: {
    fontSize: 8,
    marginTop: 5,
  },
  printDateTime: {
    fontSize: 8,
    marginTop: 5,
  },
})


const MyApp = () => {
  return (
    <PDFViewer width={1200} height={760}>
      <MyDocument></MyDocument>
    </PDFViewer>
  )
}
const MyDocument = () => {
  return (
    <Document title='Academin Transcript'>
      <Page size="A4" style={styles.page}>
        <View>

          {/* Header */}

          <View style={styles.Header}>
            <View style={styles.img}>
              <Image src="../src/assets/one.jpg"></Image>
            </View>
            <View>
              <Text style={styles.H_Text}>Civil Aviation School and College</Text>
              <Text style={styles.H_TextOne}>Old Airport Road, Tejgaon, Dhaka</Text>
              <Text style={styles.H_TextOne}>Abid@gmail.com</Text>
              <Text style={styles.H_TextOne}>http://localhost:5173/</Text>
            </View>
          </View>

          {/* Sub Header */}

          <View style={styles.Sub_Header}>
            <Text>Academic Transcript</Text>
            <Text>Half Yearly Examination-2024</Text>
          </View>

          {/*1st Table */}

          <View style={styles.TwoTable}>
            <View>
              <View style={styles.ForTable}>
                <View style={styles.Table}>
                  <View style={styles.TableRow}>
                    <View style={styles.TableCol}>
                      <Text style={styles.tableText}>Student ID</Text>
                    </View>
                    <View style={styles.TableColOne}>
                      <Text style={styles.tableText}>17BM04503</Text>
                    </View>
                  </View>
                  <View style={styles.TableRow}>
                    <View style={styles.TableColTwo}>
                      <Text style={styles.tableText}>Class Roll</Text>
                    </View>
                    <View style={styles.TableColThree}>
                      <Text style={styles.tableTextRight}>20</Text>
                    </View>
                  </View>
                  <View style={styles.TableRow}>
                    <View style={styles.TableColTwo}>
                      <Text style={styles.tableTextRight}>Name</Text>
                    </View>
                    <View style={styles.TableColThree}>
                      <Text style={styles.tableTextRight}>DEBOSMITA ROY</Text>
                    </View>
                  </View>
                </View>
                <View >
                  <Image style={styles.imgOne} src="../src/assets/one.jpg"></Image>
                </View>
              </View>

              {/* 1st table 2nd Part */}

              <View style={styles.TableRowOne}>
                <View style={styles.TableColNew}>
                  <Text style={styles.tableTextOne}>Class/Programe</Text>
                </View>
                <View style={styles.TableColNewOne}>
                  <Text style={styles.tableTextTwo}>Five</Text>
                </View>
                <View style={styles.TableColNewOne}>
                  <Text style={styles.tableTextOne}>Group</Text>
                </View>
                <View style={styles.TableColNewOne}>
                  <Text style={styles.tableTextTwo}>--</Text>
                </View>
              </View>

              <View style={styles.TableRowOne}>
                <View style={styles.TableColNew}>
                  <Text style={styles.tableTextOne}>Section</Text>
                </View>
                <View style={styles.TableColNewOne}>
                  <Text style={styles.tableTextTwo}>Shema</Text>
                </View>
                <View style={styles.TableColNewOne}>
                  <Text style={styles.tableTextOne}>Shift</Text>
                </View>
                <View style={styles.TableColNewOne}>
                  <Text style={styles.tableTextTwo}>Morning</Text>
                </View>
              </View>
              <View style={styles.TableRowOne}>
                <View style={styles.TableColNew}>
                  <Text style={styles.tableTextOne}>Session</Text>
                </View>
                <View style={styles.TableColNewOne}>
                  <Text style={styles.tableTextTwo}>2023</Text>
                </View>
                <View style={styles.TableColNewOne}>
                  <Text style={styles.tableTextOne}>Version</Text>
                </View>
                <View style={styles.TableColNewOne}>
                  <Text style={styles.tableTextTwo}>Bangla</Text>
                </View>
              </View>
              <View style={styles.TableRowOne}>
                <View style={styles.TableColNewB}>
                  <Text style={styles.tableTextOne}>Category</Text>
                </View>
                <View style={styles.TableColNewOne}>
                  <Text style={styles.tableTextTwo}>General</Text>
                </View>
                <View style={styles.TableColNewOne}>
                  <Text style={styles.tableTextOne}>--</Text>
                </View>
                <View style={styles.TableColNewTwo}>
                  <Text style={styles.tableTextTwo}>0.00</Text>
                </View>
              </View>
            </View>

            {/* Right Side Table */}

            <View style={styles.RightTable}>
              <View style={styles.RightTableRow}>
                <View style={styles.RightTableCol}>
                  <Text style={styles.Text}> Letter Grade </Text>
                </View>
                <View style={styles.RightTableColOne}>
                  <Text style={styles.Text}> Marks Interval </Text>
                </View>
                <View style={styles.RightTableColOne}>
                  <Text style={styles.Text}> Grade Point </Text>
                </View>

              </View>

              {/* Table Data */}


              <View wrap={false} pageBreak="avoid" style={styles.RightTableRow}>
                <View style={styles.RightTableColTwo}>
                  <Text style={styles.RightTextOne}> A </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}> 18-01-2024 </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}>  RECEIVABLE </Text>
                </View>
              </View>
              <View wrap={false} pageBreak="avoid" style={styles.RightTableRow}>
                <View style={styles.RightTableColTwo}>
                  <Text style={styles.RightTextOne}> A </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}> 18-01-2024 </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}>  RECEIVABLE </Text>
                </View>
              </View>
              <View wrap={false} pageBreak="avoid" style={styles.RightTableRow}>
                <View style={styles.RightTableColTwo}>
                  <Text style={styles.RightTextOne}> A </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}> 18-01-2024 </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}>  RECEIVABLE </Text>
                </View>
              </View>
              <View wrap={false} pageBreak="avoid" style={styles.RightTableRow}>
                <View style={styles.RightTableColTwo}>
                  <Text style={styles.RightTextOne}> A </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}> 18-01-2024 </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}>  RECEIVABLE </Text>
                </View>
              </View>
              <View wrap={false} pageBreak="avoid" style={styles.RightTableRow}>
                <View style={styles.RightTableColTwo}>
                  <Text style={styles.RightTextOne}> B- </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}> 18-01-2024 </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}>  RECEIVABLE </Text>
                </View>
              </View>
              <View wrap={false} pageBreak="avoid" style={styles.RightTableRow}>
                <View style={styles.RightTableColTwo}>
                  <Text style={styles.RightTextOne}> A+ </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}> 18-01-2024 </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}>  RECEIVABLE </Text>
                </View>
              </View>
              <View wrap={false} pageBreak="avoid" style={styles.RightTableRow}>
                <View style={styles.RightTableColTwo}>
                  <Text style={styles.RightTextOne}> A </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}> 80-100 </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}>  RECEIVABLE </Text>
                </View>
              </View>
              <View wrap={false} pageBreak="avoid" style={styles.RightTableRow}>
                <View style={styles.RightTableColTwo}>
                  <Text style={styles.RightTextOne}> A+ </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}> 18-01-2024 </Text>
                </View>
                <View style={styles.RightTableColThree}>
                  <Text style={styles.RightTextOne}>  RECEIVABLE </Text>
                </View>
              </View>

            </View>
          </View>


          {/* 2nd Table */}

          <View style={styles.SecTable}>
            <View style={styles.SecTableRow}>
              <View style={styles.SecTableCol}>
                <Text style={styles.SecText}>SRL</Text>
              </View>
              <View style={styles.SecTableColOne}>
                <Text style={styles.SecText}>Subjects</Text>
              </View>
              <View style={styles.SecTableColTwo}>
                <Text style={styles.SecText}>Full Marks</Text>
              </View>

              <View style={styles.SecDoubleTable}>
                <View style={styles.SecTableDoubleRow}>
                  <Text style={styles.SecTextDouble}>Examination</Text>
                </View>
                <View style={styles.ExamRow}>
                  <View style={styles.ExamCol}>
                    <Text style={styles.ExamSecText}>CT</Text>
                  </View>
                  <View style={styles.ExamCol}>
                    <Text style={styles.ExamSecText}>CQ</Text>
                  </View>
                  <View style={styles.ExamCol}>
                    <Text style={styles.ExamSecText}>HW</Text>
                  </View>
                  <View style={styles.ExamCol}>
                    <Text style={styles.ExamSecText}>Total</Text>
                  </View>
                </View>
              </View>

              <View style={styles.SecTableColTwoo}>
                <Text style={styles.SecText}>Total Marks</Text>
              </View>
              <View style={styles.SecTableColTwo}>
                <Text style={styles.SecText}>Highest Marks</Text>
              </View>
              <View style={styles.SecTableColTwo}>
                <Text style={styles.SecText}>Latter Grade</Text>
              </View>
              <View style={styles.SecTableColTwo}>
                <Text style={styles.SecText}> Grade Point</Text>
              </View>
            </View>


            {/* Table Data */}

            <View style={styles.SecTableRow}>
              <View style={styles.SecTableColData}>
                <Text style={styles.SecTextData}>1</Text>
              </View>
              <View style={styles.SecTableColOneData}>
                <Text style={styles.SecTextData}>Bangla</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>100</Text>
              </View>
              <View style={styles.ExamColDataOne}>
                <Text style={styles.SecTextData}>13</Text>
              </View>
              <View style={styles.ExamColDataTwo}>
                <Text style={styles.SecTextData}>48</Text>
              </View>
              <View style={styles.ExamColDataThree}>
                <Text style={styles.SecTextData}>10.43</Text>
              </View>
              <View style={styles.ExamColDataFour}>
                <Text style={styles.SecTextData}>71.90</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>72.00</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>96.10</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>A+</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>4.00</Text>
              </View>
            </View>
            <View style={styles.SecTableRow}>
              <View style={styles.SecTableColData}>
                <Text style={styles.SecTextData}>1</Text>
              </View>
              <View style={styles.SecTableColOneData}>
                <Text style={styles.SecTextData}>Bangladesh and Global Studies</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>100</Text>
              </View>
              <View style={styles.ExamColDataOne}>
                <Text style={styles.SecTextData}>13</Text>
              </View>
              <View style={styles.ExamColDataTwo}>
                <Text style={styles.SecTextData}>48</Text>
              </View>
              <View style={styles.ExamColDataThree}>
                <Text style={styles.SecTextData}>10.43</Text>
              </View>
              <View style={styles.ExamColDataFour}>
                <Text style={styles.SecTextData}>71.90</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>72.00</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>96.10</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>A+</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>4.00</Text>
              </View>
            </View>
            <View style={styles.SecTableRow}>
              <View style={styles.SecTableColData}>
                <Text style={styles.SecTextData}>1</Text>
              </View>
              <View style={styles.SecTableColOneData}>
                <Text style={styles.SecTextData}>Bangladesh and Global Studies</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>100</Text>
              </View>
              <View style={styles.ExamColDataOne}>
                <Text style={styles.SecTextData}>13</Text>
              </View>
              <View style={styles.ExamColDataTwo}>
                <Text style={styles.SecTextData}>48</Text>
              </View>
              <View style={styles.ExamColDataThree}>
                <Text style={styles.SecTextData}>10.43</Text>
              </View>
              <View style={styles.ExamColDataFour}>
                <Text style={styles.SecTextData}>71.90</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>72.00</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>96.10</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>A+</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>4.00</Text>
              </View>
            </View>
            <View style={styles.SecTableRow}>
              <View style={styles.SecTableColData}>
                <Text style={styles.SecTextData}>1</Text>
              </View>
              <View style={styles.SecTableColOneData}>
                <Text style={styles.SecTextData}>Bangladesh and Global Studies</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>100</Text>
              </View>
              <View style={styles.ExamColDataOne}>
                <Text style={styles.SecTextData}>13</Text>
              </View>
              <View style={styles.ExamColDataTwo}>
                <Text style={styles.SecTextData}>48</Text>
              </View>
              <View style={styles.ExamColDataThree}>
                <Text style={styles.SecTextData}>10.43</Text>
              </View>
              <View style={styles.ExamColDataFour}>
                <Text style={styles.SecTextData}>71.90</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>72.00</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>96.10</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>A+</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>4.00</Text>
              </View>
            </View>
            <View style={styles.SecTableRow}>
              <View style={styles.SecTableColData}>
                <Text style={styles.SecTextData}>1</Text>
              </View>
              <View style={styles.SecTableColOneData}>
                <Text style={styles.SecTextData}>Bangladesh and Global Studies</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>100</Text>
              </View>
              <View style={styles.ExamColDataOne}>
                <Text style={styles.SecTextData}>13</Text>
              </View>
              <View style={styles.ExamColDataTwo}>
                <Text style={styles.SecTextData}>48</Text>
              </View>
              <View style={styles.ExamColDataThree}>
                <Text style={styles.SecTextData}>10.43</Text>
              </View>
              <View style={styles.ExamColDataFour}>
                <Text style={styles.SecTextData}>71.90</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>72.00</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>96.10</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>A+</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>4.00</Text>
              </View>
            </View>
            <View style={styles.SecTableRow}>
              <View style={styles.SecTableColData}>
                <Text style={styles.SecTextData}>1</Text>
              </View>
              <View style={styles.SecTableColOneData}>
                <Text style={styles.SecTextData}>Bangladesh and Global Studies</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>100</Text>
              </View>
              <View style={styles.ExamColDataOne}>
                <Text style={styles.SecTextData}>13</Text>
              </View>
              <View style={styles.ExamColDataTwo}>
                <Text style={styles.SecTextData}>48</Text>
              </View>
              <View style={styles.ExamColDataThree}>
                <Text style={styles.SecTextData}>10.43</Text>
              </View>
              <View style={styles.ExamColDataFour}>
                <Text style={styles.SecTextData}>71.90</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>72.00</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>96.10</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>A+</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>4.00</Text>
              </View>
            </View>
            <View style={styles.SecTableRow}>
              <View style={styles.SecTableColData}>
                <Text style={styles.SecTextData}>1</Text>
              </View>
              <View style={styles.SecTableColOneData}>
                <Text style={styles.SecTextData}>Bangladesh and Global Studies</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>100</Text>
              </View>
              <View style={styles.ExamColDataOne}>
                <Text style={styles.SecTextData}>13</Text>
              </View>
              <View style={styles.ExamColDataTwo}>
                <Text style={styles.SecTextData}>48</Text>
              </View>
              <View style={styles.ExamColDataThree}>
                <Text style={styles.SecTextData}>10.43</Text>
              </View>
              <View style={styles.ExamColDataFour}>
                <Text style={styles.SecTextData}>71.90</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>72.00</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>96.10</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>A+</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>4.00</Text>
              </View>
            </View>
            <View style={styles.SecTableRow}>
              <View style={styles.SecTableColData}>
                <Text style={styles.SecTextData}>1</Text>
              </View>
              <View style={styles.SecTableColOneData}>
                <Text style={styles.SecTextData}>Bangladesh and Global Studies</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>100</Text>
              </View>
              <View style={styles.ExamColDataOne}>
                <Text style={styles.SecTextData}>13</Text>
              </View>
              <View style={styles.ExamColDataTwo}>
                <Text style={styles.SecTextData}>48</Text>
              </View>
              <View style={styles.ExamColDataThree}>
                <Text style={styles.SecTextData}>10.43</Text>
              </View>
              <View style={styles.ExamColDataFour}>
                <Text style={styles.SecTextData}>71.90</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>72.00</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>96.10</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>A+</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>4.00</Text>
              </View>
            </View>
            <View style={styles.SecTableRow}>
              <View style={styles.SecTableColData}>
                <Text style={styles.SecTextData}>1</Text>
              </View>
              <View style={styles.SecTableColOneData}>
                <Text style={styles.SecTextData}>Bangladesh and Global Studies</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>100</Text>
              </View>
              <View style={styles.ExamColDataOne}>
                <Text style={styles.SecTextData}>13</Text>
              </View>
              <View style={styles.ExamColDataTwo}>
                <Text style={styles.SecTextData}>48</Text>
              </View>
              <View style={styles.ExamColDataThree}>
                <Text style={styles.SecTextData}>10.43</Text>
              </View>
              <View style={styles.ExamColDataFour}>
                <Text style={styles.SecTextData}>71.90</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>72.00</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>96.10</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>A+</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>4.00</Text>
              </View>
            </View>
            <View style={styles.SecTableRow}>
              <View style={styles.SecTableColData}>
                <Text style={styles.SecTextData}>1</Text>
              </View>
              <View style={styles.SecTableColOneData}>
                <Text style={styles.SecTextData}>Bangladesh and Global Studies</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>100</Text>
              </View>
              <View style={styles.ExamColDataOne}>
                <Text style={styles.SecTextData}>13</Text>
              </View>
              <View style={styles.ExamColDataTwo}>
                <Text style={styles.SecTextData}>48</Text>
              </View>
              <View style={styles.ExamColDataThree}>
                <Text style={styles.SecTextData}>10.43</Text>
              </View>
              <View style={styles.ExamColDataFour}>
                <Text style={styles.SecTextData}>71.90</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>72.00</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>96.10</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>A+</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>4.00</Text>
              </View>
            </View>
            <View style={styles.SecTableRow}>
              <View style={styles.SecTableColData}>
                <Text style={styles.SecTextData}>1</Text>
              </View>
              <View style={styles.SecTableColOneData}>
                <Text style={styles.SecTextData}>Bangladesh and Global Studies</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>100</Text>
              </View>
              <View style={styles.ExamColDataOne}>
                <Text style={styles.SecTextData}>13</Text>
              </View>
              <View style={styles.ExamColDataTwo}>
                <Text style={styles.SecTextData}>48</Text>
              </View>
              <View style={styles.ExamColDataThree}>
                <Text style={styles.SecTextData}>10.43</Text>
              </View>
              <View style={styles.ExamColDataFour}>
                <Text style={styles.SecTextData}>71.90</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>72.00</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>96.10</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>A+</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>4.00</Text>
              </View>
            </View>
            <View style={styles.SecTableRow}>
              <View style={styles.SecTableColData}>
                <Text style={styles.SecTextData}>1</Text>
              </View>
              <View style={styles.SecTableColOneData}>
                <Text style={styles.SecTextData}>Bangladesh and Global Studies</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>100</Text>
              </View>
              <View style={styles.ExamColDataOne}>
                <Text style={styles.SecTextData}>13</Text>
              </View>
              <View style={styles.ExamColDataTwo}>
                <Text style={styles.SecTextData}>48</Text>
              </View>
              <View style={styles.ExamColDataThree}>
                <Text style={styles.SecTextData}>10.43</Text>
              </View>
              <View style={styles.ExamColDataFour}>
                <Text style={styles.SecTextData}>71.90</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>72.00</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>96.10</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>A+</Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>4.00</Text>
              </View>
            </View>

            <View style={styles.SecTableRow}>
              <View style={styles.SecTableColTotal}>
                <Text style={styles.SecTextData}> </Text>
              </View>
              <View style={styles.SecTableColOneTotal}>
                <Text style={styles.SecTextData}>Total Marks & Total GP</Text>
              </View>
              <View style={styles.SecTableColTwoTotal}>
                <Text style={styles.SecTextData}></Text>
              </View>
              <View style={styles.ExamColDataOneTotal}>
                <Text style={styles.SecTextData}></Text>
              </View>
              <View style={styles.ExamColDataTwoTotal}>
                <Text style={styles.SecTextData}></Text>
              </View>
              <View style={styles.ExamColDataThreeTotal}>
                <Text style={styles.SecTextData}></Text>
              </View>
              <View style={styles.ExamColDataFourTotal}>
                <Text style={styles.SecTextData}></Text>
              </View>
              <View style={styles.SecTableColTwoTotal}>
                <Text style={styles.SecTextData}>375.00</Text>
              </View>
              <View style={styles.SecTableColTwoTotal}>
                <Text style={styles.SecTextData}></Text>
              </View>
              <View style={styles.SecTableColTwoTotal}>
                <Text style={styles.SecTextData}></Text>
              </View>
              <View style={styles.SecTableColTwoData}>
                <Text style={styles.SecTextData}>20.00</Text>
              </View>
            </View>

          </View>

          {/* 3rd Table */}

          <View style={styles.Table}>
            <View style={styles.ThirdTableRow}>
              <View style={styles.ThirdTableCol}>
                <Text style={styles.ThirdTableText}>Grade Point Average</Text>
              </View>
              <View style={styles.ThirdTableColOne}>
                <Text style={styles.ThirdTableText}>3.33</Text>
              </View>
              <View style={styles.ThirdTableColOne}>
                <Text style={styles.ThirdTableText}>Position in Merit List</Text>
              </View>
              <View style={styles.ThirdTableColOne}>
                <Text style={styles.ThirdTableText}>Attendance</Text>
              </View>
            </View>

            {/* Third Table Data */}

            <View style={styles.ThirdTableRow}>
              <View style={styles.ThirdTableColTwo}>
                <Text style={styles.ThirdTableTextOne}>Latter Grade</Text>
              </View>
              <View style={styles.ThirdTableColThree}>
                <Text style={styles.ThirdTableTextOne}>B</Text>
              </View>
              <View style={styles.ThirdTableColFour}>
                <Text style={styles.ThirdTableTextOne}>Section</Text>
              </View>
              <View style={styles.ThirdTableColFour}>
                <Text style={styles.ThirdTableTextOne}>22 out of 53</Text>
              </View>
              <View style={styles.ThirdTableColFour}>
                <Text style={styles.ThirdTableTextOne}>Working Days</Text>
              </View>
              <View style={styles.ThirdTableColFour}>
                <Text style={styles.ThirdTableTextOne}>0</Text>
              </View>
            </View>

            <View style={styles.ThirdTableRow}>
              <View style={styles.ThirdTableColTwo}>
                <Text style={styles.ThirdTableTextOne}>Total Marks with Fraction</Text>
              </View>
              <View style={styles.ThirdTableColThree}>
                <Text style={styles.ThirdTableTextOne}>374.10</Text>
              </View>
              <View style={styles.ThirdTableColFour}>
                <Text style={styles.ThirdTableTextOne}>Class/ Group</Text>
              </View>
              <View style={styles.ThirdTableColFour}>
                <Text style={styles.ThirdTableTextOne}>112 out of 237</Text>
              </View>
              <View style={styles.ThirdTableColFour}>
                <Text style={styles.ThirdTableTextOne}>Present</Text>
              </View>
              <View style={styles.ThirdTableColFour}>
                <Text style={styles.ThirdTableTextOne}>0</Text>
              </View>
            </View>
          </View>

          {/* Remarks */}

          <View style={styles.Remarks}>
            <Text style={styles.TextOne}> Remarks :   Satisfactory</Text>
          </View>
        </View>
        <Footer></Footer>
      </Page>
    </Document>
  )
}

const Footer = () => (
  <View style={styles.footer} fixed >
    <Text style={styles.footerText}>Design and developed by: Walton Group</Text>
    <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => ` ${pageNumber} / ${totalPages}`} />
    <Text style={styles.printDateTime}>Print Date and Time: Monday, 8 July 2024 11: 57: 44 AM</Text>
  </View>
)

export default MyApp

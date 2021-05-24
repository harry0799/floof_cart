import React, { useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

const Date = (props) => {
    
    const [Sdate,setDate] = useState('');
    
    const today = moment().format();
   // const futureMonth = moment(today).add(1, 'M');
    const futureMonthEnd = moment(today).endOf('month').format();
    const dt = moment(Sdate, 'YYYY-MM-DD');
    const days = dt.format('DD MMMM YYYY');
    const day = dt.format('ddd');
    

        return (
          <View style={{alignItems: 'center', marginVertical: 30}}>
            <DatePicker
              style={{width: 200}}
              date={Sdate}
              mode="date"
              placeholder="select date"
              format="YYYY-MM-DD"
              minDate= {today}
              maxDate= {futureMonthEnd}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0,
                },
                dateInput: {
                  marginLeft: 36,
                },
              }}
              onDateChange={date => {
                setDate(date);
              }}
            />
            <Text style={{marginTop: 30, fontSize: 20}}>
              {JSON.stringify(Sdate.split('-'))}
            </Text>
            
            <Text style={{marginTop: 30, fontSize: 20}}>
             {day} {days}
            </Text>
          </View>
        );
    }


const styles = StyleSheet.create({})
export default Date;
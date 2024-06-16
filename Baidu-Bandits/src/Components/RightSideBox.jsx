import React, { useEffect } from 'react';
import { Avatar, Button } from '@chakra-ui/react';
import loc from '../assets/location-pin-svgrepo-com.svg';
import bell from '../assets/bell-svgrepo-com.svg';
import sett from '../assets/setting-2-svgrepo-com.svg';
import { useSelector, useDispatch } from 'react-redux';
import { COMPLETE, DELETEAPPOINTMENT } from '../redux/actionTypes';

const RightSideBox = () => {
  const dispatch = useDispatch();
  const userobj = useSelector((state) => state);

  useEffect(() => {
    const interval = setInterval(() => {
      checkExpiredAppointments();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const checkExpiredAppointments = () => {
    const now = new Date();
    const currentTime = now.getTime();
    const updatedAppointments = userobj.doctorAppointments.filter(
      (appointment) => {
        const appointmentTime = new Date(
          `${appointment.date} ${appointment.time}`
        ).getTime();
        return appointmentTime >= currentTime;
      }
    );

    if (updatedAppointments.length !== userobj.doctorAppointments.length) {
      updatedAppointments.forEach((appointment) => {
        const appointmentTime = new Date(
          `${appointment.date} ${appointment.time}`
        ).getTime();
        if (appointmentTime < currentTime) {
          dispatch({ type: DELETEAPPOINTMENT, payload: appointment.id });
        }
      });
    }
  };
  const handleCancelAppointment = (id) => {
    dispatch({ type: DELETEAPPOINTMENT, payload: id });
  };

  const handleComplete = (id) => {
    dispatch({ type: COMPLETE, payload: id });
  };

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        width: '22%',
        background: '#f4f5f5',
        fontFamily: 'sans-serif',
        padding: '0px 10px',
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '39px',
          alignItems: 'center',
          margin: '7%',
          marginTop: '30px',
        }}
      >
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Avatar name="" size="md" src="https://bit.ly/broken-link" />
          <div>
            <p style={{ fontWeight: '800', fontSize: '17px' }}>
              {userobj.fullName}
            </p>
            <div style={{ display: 'flex', gap: '5px' }}>
              <img src={loc} alt="location" width="18px" />
              <p style={{ fontSize: '17px', color: 'grey' }}>India</p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <img src={bell} alt="bell" width="20px" />
          <img src={sett} alt="settings" width="20px" />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          width: 'auto',
          justifyContent: 'space-evenly',
          background: 'white',
          alignItems: 'center',
          margin: '3%',
          padding: '7px',
          borderRadius: '10px',
          marginTop: '30px',
          paddingTop: '15px',
        }}
      >
        <div>
          <p>
            <span style={{ fontSize: '25px', fontWeight: '600' }}>
              {userobj.age}
            </span>{' '}
            <sub style={{ fontSize: '16px', color: '#adb3bc' }}>kg</sub>
          </p>
          <p style={{ color: '#adb3bc' }}>Weight</p>
        </div>
        <div>
          <p>
            <span style={{ fontSize: '25px', fontWeight: '600' }}>
              {userobj.height}
            </span>
            <sub style={{ fontSize: '16px', color: '#adb3bc' }}>cm</sub>
          </p>
          <p style={{ color: '#adb3bc' }}>Height</p>
        </div>
        <div>
          <p>
            <span style={{ fontSize: '25px', fontWeight: '600' }}>
              {userobj.age}
            </span>{' '}
            <sub style={{ fontSize: '16px', color: '#adb3bc' }}>yrs</sub>
          </p>
          <p style={{ color: '#adb3bc' }}>Age</p>
        </div>
      </div>
      <div>
        <p
          style={{
            fontSize: '20px',
            fontWeight: '600',
            color: '#11a5bc',
            margin: '10px 0px',
            textAlign: 'center',
            marginTop: '25px',
          }}
        >
          My Schedule
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {userobj.schedulearr.length > 0 &&
            userobj.schedulearr.map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '15px',
                  borderRadius: '20px',
                  margin: '0px 3%',
                }}
                onClick={() => {
                  handleComplete(item.id);
                }}
              >
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
                >
                  <img src={item.gif} alt="" width="50px" />
                  <div>
                    <p style={{ color: '#5e626c' }}>{item.name}</p>
                    <p style={{ color: '#5e626c', fontSize: '12px' }}>
                      3*15 Times
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    style={{
                      color: '#11a5bc',
                      border: '1px solid #11a5bc',
                      borderRadius: '15px',
                      padding: '5px 15px',
                      fontSize: '13px',
                      height: '30px',
                    }}
                    onClick={() => {
                      handleComplete(item.id);
                    }}
                  >
                    Complete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
      <p
        style={{
          fontSize: '20px',
          fontWeight: '600',
          color: '#11a5bc',
          margin: '10px 0px',
          textAlign: 'center',
          marginTop: '25px',
        }}
      >
        Upcoming Appointments
      </p>

      {userobj.doctorAppointments.length > 0 ? (
        userobj.doctorAppointments.map((item, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '88%',
              background: 'white',
              padding: '15px',
              borderRadius: '10px',
              marginTop: '10px',
              margin: '6%',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <p style={{ fontWeight: 'bold' }}>Date: {item.date}</p>
            <p>Time: {item.time}</p>

            <Button
              colorScheme="red"
              size="sm"
              onClick={() => handleCancelAppointment(item.id)}
              style={{ marginTop: '10px' }}
            >
              Cancel Appointment
            </Button>
          </div>
        ))
      ) : (
        <p
          style={{
            fontSize: '20px',
            textAlign: 'center',
          }}
        >
          No upcoming appointments
        </p>
      )}
    </div>
  );
};

export default RightSideBox;

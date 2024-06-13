import React from 'react';
import { Avatar } from '@chakra-ui/react';
import loc from '../assets/location-pin-svgrepo-com.svg';
import bell from '../assets/bell-svgrepo-com.svg';
import sett from '../assets/setting-2-svgrepo-com.svg';

const RightSideBox = () => {
  return (
    <div style={{ width: '22%', background: '#f4f5f5' }}>
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
              James Septimus
            </p>
            <div style={{ display: 'flex', gap: '5px' }}>
              <img src={loc} alt="" width="18px" />
              <p style={{ fontSize: '17px', color: 'grey' }}>India</p>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '15px' }}>
          <img src={bell} alt="" width="20px" />
          <img src={sett} alt="" width="20px" />
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          width: 'auto',
          justifyContent: 'space-evenly',
          background: 'white',
          alignItems: 'center',
          margin: '7%',
          padding: '7px',
          borderRadius: '10px',
          marginTop: '30px',
          paddingTop: '15px',
        }}
      >
        <div>
          <p>
            <span style={{ fontSize: '25px', fontWeight: '600' }}>56</span>{' '}
            <sub style={{ fontSize: '16px', color: '#adb3bc' }}>kg</sub>
          </p>
          <p style={{ color: '#adb3bc' }}>Weight</p>
        </div>
        <div>
          <p>
            <span style={{ fontSize: '25px', fontWeight: '600' }}>5.7</span>{' '}
          </p>
          <p style={{ color: '#adb3bc' }}>Height</p>
        </div>
        <div>
          <p>
            <span style={{ fontSize: '25px', fontWeight: '600' }}>31</span>{' '}
            <sub style={{ fontSize: '16px', color: '#adb3bc' }}>yrs</sub>
          </p>
          <p style={{ color: '#adb3bc' }}>Age</p>
        </div>
      </div>
    </div>
  );
};

export default RightSideBox;

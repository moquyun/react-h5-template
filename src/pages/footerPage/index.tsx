import React, { useState,useEffect } from 'react';
import styles from './styles/index.less';
import Footer from '@/components/Footer'

interface PropTypes {
}

const Page = (props: PropTypes) => {
  const [multiple,setMultiple] = useState<boolean>(true),
  [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    console.log('componentDidMount', props);
  }, []);

  return (
    <div className={styles.page}>
      000
      <Footer />
    </div>
  );
};
export default Page;

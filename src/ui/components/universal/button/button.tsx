import React from 'react';
import {Button, Flex} from 'antd';
import style from 'styles/button.module.css'

export const UniversalButton = () => {
    return (
        <div className={style.buttonContainer}>
            <Flex gap="small" wrap>
                <Button type="primary" color='default'>Back</Button>
            </Flex>
        </div>
    );
};



import React from 'react';

type ChildrenItemType={
    title:string
}
export const ChildrenItem = ({title}:ChildrenItemType) => {
    return (
        <div>
            {title}
        </div>
    );
};


/**
 * @file index.jsx
 * @description Index section.
 */

'use strict';
import { FlexibleSection } from '../../Content/components/GridSection';
import { SvgSpinnersBlocksShuffle3 } from '../../Icons/SNBlock';

/**
 * Index section.
 * @returns Returns the component.
 */
function IndexSection() {
    return (
        <>
            <FlexibleSection
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    padding: '50px 20px',
                    alignItems: 'center',
                }}
            >
                <SvgSpinnersBlocksShuffle3 style={{ width: '100px' }} />
                <h1 style={{ marginTop: '26px' }}>Server Under Maintenance</h1>
                <p>Please come back later.</p>
            </FlexibleSection>
        </>
    );
}

export default IndexSection;

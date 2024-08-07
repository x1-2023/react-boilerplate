/**
 * @file index.jsx
 * @description Section samples section.
 */

'use strict';
import {
    DynamicSection,
    FixedSection,
    FlexibleSection,
} from '../../Content/components/GridSection';

/**
 * Index section.
 * @returns Returns the component.
 */
function IndexSection() {
    return (
        <>
            <DynamicSection
                noGutters
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    padding: '50px 20px',
                    alignItems: 'center',
                    border: '2px solid var(--color-red)',
                }}
            >
                <h1>Dynamic Section</h1>
                <p>This section's height is determined by its content.</p>
            </DynamicSection>

            <FixedSection
                noGutters
                height={300}
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    padding: '50px 20px',
                    alignItems: 'center',
                    border: '2px solid var(--color-green)',
                }}
            >
                <h1>Fixed Section</h1>
                <p>This section has a fixed height of 300 pixels.</p>
            </FixedSection>

            <FlexibleSection
                noGutters
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    padding: '50px 20px',
                    alignItems: 'center',
                    border: '2px solid var(--color-blue)',
                }}
            >
                <h1>Flexible Section</h1>
                <p>
                    This section's height is automatically scaled to fit the
                    remaining space.
                </p>
            </FlexibleSection>
        </>
    );
}

export default IndexSection;

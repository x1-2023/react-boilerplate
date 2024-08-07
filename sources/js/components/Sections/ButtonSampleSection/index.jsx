/**
 * @file index.jsx
 * @description Button sample section.
 */

'use strict';
import { openModalWindow } from '../../ModalOverlay';
import { FlexibleSection } from '../../Content/components/GridSection';
import Button from '../../Button';
import { showToast } from '../../ToastOverlay';

import * as styles from './ButtonSampleSection.module.css';

/**
 * Button sample section.
 * @returns Returns the component.
 */
function ButtonSampleSection() {
    function handlePlayClickSound() {
        const audio = new Audio('/assets/static/sound/ClickSoundEffect.wav');
        audio.play();
    }

    return (
        <FlexibleSection
            style={{
                display: 'flex',
                flexFlow: 'columm nowrap',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '50px 20px',
                textAlign: 'center',
            }}
        >
            <div className={styles['content']}>
                <h1>Default Buttons</h1>
                <Button>Primary</Button> <Button color="red">Red</Button>{' '}
                <Button color="orange">Orange</Button>{' '}
                <Button color="yellow">Yellow</Button>{' '}
                <Button color="green">Green</Button>{' '}
                <Button color="blue">Blue</Button>{' '}
                <Button color="purple">Purple</Button>
                <h1 style={{ marginTop: '26px' }}>Default White Buttons</h1>
                <Button white>Primary</Button>{' '}
                <Button color="red" white>
                    Red
                </Button>{' '}
                <Button color="orange" white>
                    Orange
                </Button>{' '}
                <Button color="yellow" white>
                    Yellow
                </Button>{' '}
                <Button color="green" white>
                    Green
                </Button>{' '}
                <Button color="blue" white>
                    Blue
                </Button>{' '}
                <Button color="purple" white>
                    Purple
                </Button>
                <h1 style={{ marginTop: '26px' }}>Outline White Buttons</h1>
                <Button outline white>
                    Primary
                </Button>{' '}
                <Button color="red" outline white>
                    Red
                </Button>{' '}
                <Button color="orange" outline white>
                    Orange
                </Button>{' '}
                <Button color="yellow" outline white>
                    Yellow
                </Button>{' '}
                <Button color="green" outline white>
                    Green
                </Button>{' '}
                <Button color="blue" outline white>
                    Blue
                </Button>{' '}
                <Button color="purple" outline white>
                    Purple
                </Button>
                <h1 style={{ marginTop: '26px' }}>White-Only Buttons</h1>
                <Button whiteOnly>Default</Button>{' '}
                <Button outline whiteOnly>
                    Outline
                </Button>
                <h1 style={{ marginTop: '26px' }}>Disabled Buttons</h1>
                <Button disabled>Primary</Button>{' '}
                <Button disabled color="red">
                    Red
                </Button>{' '}
                <Button disabled color="orange">
                    Orange
                </Button>{' '}
                <Button disabled color="yellow">
                    Yellow
                </Button>{' '}
                <Button disabled color="green">
                    Green
                </Button>{' '}
                <Button disabled color="blue">
                    Blue
                </Button>{' '}
                <Button disabled color="purple">
                    Purple
                </Button>
                <br />
                <Button disabled white>
                    Primary
                </Button>{' '}
                <Button disabled color="red" white>
                    Red
                </Button>{' '}
                <Button disabled color="orange" white>
                    Orange
                </Button>{' '}
                <Button disabled color="yellow" white>
                    Yellow
                </Button>{' '}
                <Button disabled color="green" white>
                    Green
                </Button>{' '}
                <Button disabled color="blue" white>
                    Blue
                </Button>{' '}
                <Button disabled color="purple" white>
                    Purple
                </Button>
                <br />
                <Button disabled outline>
                    Primary
                </Button>{' '}
                <Button disabled color="red" outline>
                    Red
                </Button>{' '}
                <Button disabled color="orange" outline>
                    Orange
                </Button>{' '}
                <Button disabled color="yellow" outline>
                    Yellow
                </Button>{' '}
                <Button disabled color="green" outline>
                    Green
                </Button>{' '}
                <Button disabled color="blue" outline>
                    Blue
                </Button>{' '}
                <Button disabled color="purple" outline>
                    Purple
                </Button>
                <br />
                <Button disabled outline white>
                    Primary
                </Button>{' '}
                <Button disabled color="red" outline white>
                    Red
                </Button>{' '}
                <Button disabled color="orange" outline white>
                    Orange
                </Button>{' '}
                <Button disabled color="yellow" outline white>
                    Yellow
                </Button>{' '}
                <Button disabled color="green" outline white>
                    Green
                </Button>{' '}
                <Button disabled color="blue" outline white>
                    Blue
                </Button>{' '}
                <Button disabled color="purple" outline white>
                    Purple
                </Button>
                <br />
                <Button disabled whiteOnly>
                    Default
                </Button>{' '}
                <Button disabled outline whiteOnly>
                    Outline
                </Button>
                <h1 style={{ marginTop: '26px' }}>Icon Buttons</h1>
                <Button color="green">
                    <i className="fa-solid fa-plus"></i> Create
                </Button>{' '}
                <Button color="red">
                    <i className="fa-solid fa-trash"></i> Delete
                </Button>{' '}
                <Button color="blue">
                    <i className="fa-solid fa-rotate"></i> Update
                </Button>{' '}
                <Button color="purple">
                    <i className="fa-solid fa-upload"></i> Upload
                </Button>{' '}
                <h1 style={{ marginTop: '26px' }}>Sized Buttons</h1>
                <Button size="small">Small</Button> <Button>Default</Button>{' '}
                <Button size="large">Large</Button>
                <h1 style={{ marginTop: '26px' }}>Functional Buttons</h1>
                <Button
                    id="modal-window-sample-button-1"
                    onClick={() => openModalWindow('custom-modal-window-1')}
                >
                    Modal Window 1
                </Button>{' '}
                <Button
                    id="modal-window-sample-button-2"
                    onClick={() => openModalWindow('custom-modal-window-2')}
                >
                    Modal Window 2
                </Button>{' '}
                <Button id="click-sound-button" onClick={handlePlayClickSound}>
                    Click Sound
                </Button>
            </div>
        </FlexibleSection>
    );
}

export default ButtonSampleSection;

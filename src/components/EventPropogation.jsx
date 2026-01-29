export const EventPropagation = () => {
    const grandParentEvent = (e) => {
        // console.log(e);
        e.stopPropagation();
        alert('GrandParent Div Clicked');
    }
    const parentEvent = (e) => {
        // console.log(e);
        e.stopPropagation();
        alert('Parent Div Clicked');
    }
    const childEvent = (e) => {
        // console.log(e);
        e.stopPropagation();
        alert('Child Div Clicked');
    }
    return (
        <>
        <h2>Event Propagation Example</h2>
        <div style={{border: '1px solid black', padding: '10px'}} onClickCapture={grandParentEvent}>GrandParent Div
            <div style={{border: '1px solid black', padding: '10px'}} onClickCapture={parentEvent}>Parent Div
                <div style={{border: '1px solid black', padding: '10px', marginTop: '10px'}} onClick={childEvent}>Child Div</div>
            </div>
        </div>
        </>
    );
}  
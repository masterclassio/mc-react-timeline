import React from 'react';

export function HelloWorld() {
    return (<>
        <section className="TimelineComponent">

            <section className='droppableCanvas '>

                {/* <!--
                @component Timeline step component
                -->
                <!--     <TimelineStepComponent> --> */}
                    <section className='TimelineStepComponent isNotDragging'>

                        {/**
                            *
                            * @feature Handle
                            *
                            **/}
                        <span className="TimelineStepComponent_drag_handle">
                            STEP DRAG HANDLE
                        </span>

                        
                        {/**
                        *
                        * @feature Label
                        *
                        **/} 
                        <span className="TimelineStepComponent_label">
                            <img src="https://i.ibb.co/NZd1W56/basecamp.png" />
                            <span>
                                {/* <!--
                                {this.props.row.content} 
                                --> */}
                                Row Content
                            </span>
                        </span>

                        {/**
                        *
                        * @component Timeline Row
                        *
                        **/}
                        {/* <!--         <TimelineRowComponent> --> */}
                            {/* <!--

                            NOTEPAD VARIANT


                            ---> */}
                            {/* <!-- ─────────── Timeline Row ─────────── --> */}
                            <section className="TimelineRow-Droppable">
                                <section className="TimelineRow-dragcontainer">
                                    <section
                                        className="TimelineRow-dragger draggableNotOpen isNotDragging"
                                        data-open="false"
                                        data-timeline="Notepad">

                                        {/* <!-- Drag handle --> */}
                                        <span className="TimelineRow-drag_handle">DRAG&nbsp;HANDLE</span>

                                        {/* <!-- ─── Left‑hand header & sidebar ─── --> */}
                                        <section className="TimelineRow-left">
                                            <section className="TimelineRow-left_header">
                                                <img
                                                    src="https://i.ibb.co/B4Hmmjv/notes.png"
                                                    style={{
                                                        position:'absolute',
                                                        width:'33px',
                                                        top:'15px',
                                                        left:'9px',
                                                     }} />

                                                <span className="TimelineRow-left_header_txt">
                                                    <span>Notepad</span>
                                                    <div className="TimelineRow-time_range">0&nbsp;sec – 10&nbsp;secs</div>
                                                </span>

                                                <button className="btnExpandTimeline"><span className="carat"></span></button>
                                            </section>

                                            <section className="bubble straightline">
                                                <div className="timelinerow-tab-btn-list">
                                                    <button className="active timelinerow-tab-btn">
                                                        <img src="/assets/imgs/icons/notes.png" /><span> Notepad</span>
                                                    </button>
                                                    <button className="timelinerow-tab-btn">
                                                        <img src="/assets/imgs/icons/config.png" /><span> Config</span>
                                                    </button>
                                                </div>
                                            </section>
                                        </section>

                                        {/* <!-- ─── Timeline placeholder ─── -->
                                        <!--       <TimelineBar>  -->

                                            <!-- ─────────── Timeline Bar: Notepad ─────────── --> */}
                                            <section className="TimelineRow-row_timeline">
                                                <div
                                                    className="timeline-bar timeline-bar--notepad"
                                                    style={{
                                                        left:'0px',
                                                        width:'1000px',
                                                    }}>
                                                    Notepad
                                                </div>
                                            </section>



                                            {/* <!--       </TimelineBar> --> */}
                                    </section>
                                </section>
                            </section>

                            {/* <!-- ─────────── Panel area ─────────── --> */}
                            <section data-note-tab="notepad" className="timeline-tabs">
                                <section data-note-tab="notepad" className="timeline-tab-panel">
                                    {/* <react-draft-wysiwyg> TODO react-draft-wysiwyg </react-draft-wysiwyg> */}
                                </section>
                                <section data-note-tab="config" className="timeline-tab-panel">
                                    Notepad Config
                                </section>
                            </section>


                            {/* <!--




                            CODE Timelinebar VARIANT




--> */}
                            {/* <!-- ─────────── Timeline Row ─────────── --> */}
                            <section className="TimelineRow-Droppable">
                                <section className="TimelineRow-dragcontainer">
                                    <section
                                        className="TimelineRow-dragger draggableNotOpen isNotDragging"
                                        data-open="false"
                                        data-timeline="Code">

                                        <span className="TimelineRow-drag_handle">DRAG&nbsp;HANDLE</span>

                                        <section className="TimelineRow-left">
                                            <section className="TimelineRow-left_header">
                                                <img
                                                    src="https://i.ibb.co/jrQ4w1J/vs-code.png"
                                                    style={{
                                                        position:'absolute',
                                                        width:'33px',
                                                        top:'15px',
                                                        left:"9px;"
                                                    }} />

                                                <span className="TimelineRow-left_header_txt">
                                                    <span>Code</span>
                                                    <div className="TimelineRow-time_range">0&nbsp;sec – 10&nbsp;secs</div>
                                                </span>

                                                <button className="btnExpandTimeline"><span className="carat"></span></button>
                                            </section>

                                            <section className="bubble straightline">
                                                <div className="timelinerow-tab-btn-list">
                                                    <button className="active timelinerow-tab-btn">
                                                        <img src="/assets/imgs/icons/vs-code.png" /><span> Template</span>
                                                    </button>
                                                    <button className="timelinerow-tab-btn">
                                                        <img src="/assets/imgs/icons/vs-code.png" /><span> Data</span>
                                                    </button>
                                                    <button className="timelinerow-tab-btn">
                                                        <img src="/assets/imgs/icons/config.png" /><span> Config</span>
                                                    </button>
                                                </div>
                                            </section>
                                        </section>

                                        {/* <!--       <TimelineBar>  --> */}

                                            {/* <!-- ───────────
                                            Timeline bar VAIRANt

                                            Timeline Bar: Code 


                                            ─────────── --> */}
                                            <section className="TimelineRow-row_timeline">
                                                <div
                                                    className="timeline-bar timeline-bar--code"
                                                    data-start="0"
                                                    data-end="10000"
                                                    style={{
                                                        left: '100px', 
                                                        width:'1000px',
                                                    }}>
                                                    Code
                                                </div>
                                            </section>


                                            {/* <!--       </TimelineBar> --> */}
                                    </section>
                                </section>
                            </section>

                            {/* <!-- ─────────── Panel area ─────────── --> */}
                            <section data-code-tab="template" className="timeline-tabs">
                                <section data-code-tab="template" className="timeline-tab-panel">
                                    {/* <DropdownTreeComponent> TODO DropdownTreeComponent </DropdownTreeComponent>
                                    <AceEditor> TODO AceEditor </AceEditor> */}
                                </section>
                                <section data-code-tab="data" className="timeline-tab-panel">
                                    {/* <DropdownTreeComponent> TODO DropdownTreeComponent </DropdownTreeComponent>
                                    <AceEditor> TODO AceEditor </AceEditor> */}
                                </section>
                                <section data-code-tab="config" className="timeline-tab-panel">
                                    JSON editor
                                </section>
                            </section>

                            {/* 
                            <!--



                            TEST VARIANT 




                            --> */}
                            {/* <!-- ─────────── Timeline Row ─────────── --> */}
                            <section className="TimelineRow-Droppable">
                                <section className="TimelineRow-dragcontainer">
                                    <section
                                        className="TimelineRow-dragger draggableNotOpen isNotDragging"
                                        data-open="false"
                                        data-timeline="Test">

                                        <span className="TimelineRow-drag_handle">DRAG&nbsp;HANDLE</span>

                                        <section className="TimelineRow-left">
                                            <section className="TimelineRow-left_header">
                                                <img
                                                    src="https://i.ibb.co/58Ws9xf/vs-test.png"
                                                    style={{
                                                        position:'absolute',
                                                        width:'33px',
                                                        top:'15px',
                                                        left:'9px'
                                                    }} />

                                                <span className="TimelineRow-left_header_txt">
                                                    <span>Test</span>
                                                    <div className="TimelineRow-time_range">0&nbsp;sec – 10&nbsp;secs</div>
                                                </span>

                                                <button className="btnExpandTimeline"><span className="carat"></span></button>
                                            </section>

                                            <section className="bubble straightline">
                                                <div className="timelinerow-tab-btn-list">
                                                    <button className="active timelinerow-tab-btn">
                                                        <img src="/assets/imgs/icons/vs-test.png" /><span> Template</span>
                                                    </button>
                                                    <button className="timelinerow-tab-btn">
                                                        <img src="/assets/imgs/icons/vs-test.png" /><span> Data</span>
                                                    </button>
                                                    <button className="timelinerow-tab-btn">
                                                        <img src="/assets/imgs/icons/config.png" /><span> Config</span>
                                                    </button>
                                                </div>
                                            </section>
                                        </section>

                                        {/* <!--       <TimelineBar>  --> */}

                                            {/* <!--
                                            TEST TIMELINE BAR VARIANT 
                                            -->
                                            <!-- ─────────── Timeline Bar: Test ─────────── --> */}
                                            <section className="TimelineRow-row_timeline">
                                                <div
                                                    className="timeline-bar timeline-bar--test"
                                                    data-start="0"
                                                    data-end="10000"
                                                    style={{
                                                        left:'200px',
                                                        width:'400px',
                                                    }}>
                                                    Test
                                                </div>
                                            </section>


                                            {/* <!--       </TimelineBar> --> */}
                                    </section>
                                </section>
                            </section>

                            {/* <!-- ─────────── Panel area ─────────── --> */}
                            <section data-test-tab="template" className="timeline-tabs">
                                <section data-test-tab="template" className="timeline-tab-panel">
                                    {/* <DropdownTreeComponent> TODO DropdownTreeComponent </DropdownTreeComponent>
                                    <AceEditor> TODO AceEditor </AceEditor> */}
                                </section>
                                <section data-test-tab="data" className="timeline-tab-panel">
                                    {/* <DropdownTreeComponent> TODO DropdownTreeComponent </DropdownTreeComponent>
                                    <AceEditor> TODO AceEditor </AceEditor> */}
                                </section>
                                <section data-test-tab="config" className="timeline-tab-panel">
                                    JSON editor
                                </section>
                            </section>

                            {/* <!-- CLI -->
                            <!-- ─────────── Timeline Row ─────────── --> */}
                            <section className="TimelineRow-Droppable">
                                <section className="TimelineRow-dragcontainer">
                                    <section
                                        className="TimelineRow-dragger draggableNotOpen isNotDragging"
                                        data-open="false"
                                        data-timeline="Terminal">

                                        <span className="TimelineRow-drag_handle">DRAG&nbsp;HANDLE</span>

                                        <section className="TimelineRow-left">
                                            <section className="TimelineRow-left_header">
                                                <img
                                                    src="https://i.ibb.co/nM6Q6Nv/cli.png"
                                                    style={{
                                                        position:'absolute',
                                                        width:'33px',
                                                        top:'15px',
                                                        left:"-2px" 
                                                    }}
                                                />

                                                <span className="TimelineRow-left_header_txt">
                                                    <span>Terminal</span>
                                                    <div className="TimelineRow-time_range">0&nbsp;sec – 10&nbsp;secs</div>
                                                </span>

                                                <button className="btnExpandTimeline"><span className="carat"></span></button>
                                            </section>

                                            <section className="bubble straightline">
                                                <div className="timelinerow-tab-btn-list">
                                                    <button className="active timelinerow-tab-btn">
                                                        <img src="/assets/imgs/icons/notes.png" /><span> CLI</span>
                                                    </button>
                                                    <button className="timelinerow-tab-btn">
                                                        <img src="/assets/imgs/icons/config.png" /><span> Config</span>
                                                    </button>
                                                </div>
                                            </section>
                                        </section>

                                        {/* <!--       <TimelineBar>  -->
                                            <!-- CLI TIMELINELINE BAR VARIANT -->
                                            <!-- ─────────── Timeline Bar: Terminal ─────────── --> */}
                                            <section className="TimelineRow-row_timeline">
                                                <div
                                                    className="timeline-bar timeline-bar--terminal"
                                                    data-start="0"
                                                    data-end="10000"
                                                    style={{
                                                        left:'400px',
                                                        width:'600px'
                                                    }}>
                                                    Terminal
                                                </div>
                                            </section>


                                            {/* <!--       </TimelineBar> --> */}
                                    </section>
                                </section>
                            </section>

                            {/* <!-- ─────────── Panel area ─────────── --> */}
                            <section data-cli-tab="cli" className="timeline-tabs">
                                <section data-cli-tab="cli" className="timeline-tab-panel">
                                    {/* <DropdownTreeComponent> TODO DropdownTreeComponent </DropdownTreeComponent> */}
                                    {/* <AceEditor> TODO AceEditor </AceEditor> */}
                                </section>
                                <section data-cli-tab="config" className="timeline-tab-panel">
                                    JSON editor
                                </section>
                            </section>




                    </section>

            </section>

        </section>
    </>);
}
export default HelloWorld;

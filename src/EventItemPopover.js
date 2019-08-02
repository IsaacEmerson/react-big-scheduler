import React, {Component} from 'react'
import {PropTypes} from 'prop-types'
import Col from 'antd/lib/col'
import Row from 'antd/lib/row'
import './css/grid.css'
import Button from '@material-ui/core/Button'


class EventItemPopover extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        schedulerData: PropTypes.object.isRequired,
        eventItem: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        startTime: PropTypes.string.isRequired,
        endTime: PropTypes.string.isRequired,
        statusColor: PropTypes.string.isRequired,
        subtitleGetter: PropTypes.func,
        viewEventClick: PropTypes.func,
        viewEventText:PropTypes.string,
        viewEvent2Click: PropTypes.func,
        viewEvent2Text: PropTypes.string,
        eventItemPopoverTemplateResolver: PropTypes.func
    }

    render(){
        const {schedulerData, eventItem, title, startTime, endTime, statusColor,subtitleGetter, viewEventClick, viewEventText, viewEvent2Click, viewEvent2Text, eventItemPopoverTemplateResolver} = this.props;
        const {localeMoment, config} = schedulerData;
        let start = localeMoment(startTime), end = localeMoment(endTime);

        if (eventItemPopoverTemplateResolver != undefined) {
            return eventItemPopoverTemplateResolver(schedulerData, eventItem, title, start, end, statusColor);
        } else {
            let subtitleRow = <div />;
            if(subtitleGetter !== undefined){
                let subtitle = subtitleGetter(schedulerData, eventItem);
                if(subtitle != undefined){
                    subtitleRow = (
                        <Row type="flex" align="middle">
                            <Col span={2}>
                                <div />
                            </Col>
                            <Col span={22} className="overflow-text">
                                <span className="header2-text" title={subtitle}>{subtitle}</span>
                            </Col>
                        </Row>
                    );
                }
            }

            let opsRow = <div />;
            if(viewEventText !== undefined && viewEventClick !== undefined && (eventItem.clickable1 == undefined || eventItem.clickable1)){
                let col = (
                    <Col span={22}>
                        <Button className="btn-purple" type="primary" style={{cursor: 'pointer'}} onClick={() => {viewEventClick(schedulerData, eventItem);}}>{viewEventText}</Button>
                    </Col>
                );
                if(viewEvent2Text !== undefined && viewEvent2Click !== undefined && (eventItem.clickable2 == undefined || eventItem.clickable2)) {
                    col = (
                        <Col span={11}>
                            <Button className="btn-purple" variant="contained" color="primary" style={{cursor: 'pointer'}} onClick={() => {viewEventClick(schedulerData, eventItem);}}>
                                Editar
                                {/* {viewEventText} */}
                            </Button>
                            <Button style={{cursor: 'pointer', marginLeft: '8px'}} onClick={() => {viewEvent2Click(schedulerData, eventItem);}}>
                                Cancelar
                            </Button>
                            {/* <span className="header2-text" style={{color: '#108EE9', cursor: 'pointer', marginLeft: '16px'}} onClick={() => {viewEvent2Click(schedulerData, eventItem);}}>{viewEvent2Text}</span> */}
                        </Col>
                    )
                };
                opsRow = (
                    <Row type="flex" justify="end" align="middle">
                        <Col span={2}>
                            <div />
                        </Col>
                        {col}
                    </Row>
                );
            }
            else if(viewEvent2Text !== undefined && viewEvent2Click !== undefined && (eventItem.clickable2 == undefined || eventItem.clickable2)) {
                let col = (
                    <Col span={22}>
                        <Button style={{cursor: 'pointer', marginLeft: '16px'}} onClick={() => {viewEvent2Click(schedulerData, eventItem);}}>
                            Cancelar
                        </Button>
                    </Col>
                );
                opsRow = (
                    <Row type="flex" justify="end" align="middle">
                        <Col span={2}>
                            <div />
                        </Col>
                        {col}
                    </Row>
                );
            }

            let dateFormat = config.eventItemPopoverDateFormat;
            return (
                <div style={{width: '420px'}}>
                    <Row type="flex" align="middle">
                        <Col span={2}>
                            <div className="status-dot" style={{backgroundColor: statusColor}} />
                        </Col>
                        <Col span={22} className="overflow-text">
                            <span className="header2-text" title={title}>Prioridade Baixa</span>
                        </Col>
                    </Row>
                    {subtitleRow}
                    <Row type="flex" align="middle" style={{paddingTop: '12px'}}>
                        <Col span={2}>
                            <div />
                        </Col>
                        <Col span={22}>
                        <Row type="flex" justify="start">
                            <Col span={14}>
                                <Row><span className="sub-title">Supervisor</span></Row>
                                <Row><span className="main-title">Paulo Janai </span></Row>
                            </Col>
                            <Col span={6}>
                                <Row><span className="sub-title" >Checklist</span></Row>
                                <Row><span className="main-title">Manutenção</span></Row>
                            </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row type="flex" align="middle" style={{paddingTop: '12px'}}>
                        <Col span={2}>
                            <div />
                        </Col>
                        <Col span={22}>
                            <span className="header1-text">{start.format('HH:mm')}</span><span className="help-text" style={{marginLeft: '8px'}}>{start.format(dateFormat)}</span><span className="header2-text"  style={{marginLeft: '8px'}}>-</span><span className="header1-text" style={{marginLeft: '8px'}}>{end.format('HH:mm')}</span><span className="help-text" style={{marginLeft: '8px'}}>{end.format(dateFormat)}</span>
                        </Col>
                    </Row>
                    <div style={{paddingTop: '18px'}}>
                        {opsRow}
                    </div>
                </div>
            );
        }
    }
}

export default EventItemPopover

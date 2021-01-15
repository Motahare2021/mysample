import React , {Component} from 'react'
import { Table, Input, Button, Icon ,Tag} from 'antd';
import Highlighter from 'react-highlight-words';
import threatData from "../../__mocks__/threat"
import {withTranslation} from "react-i18next";
import "./tableAnt.css"
import Ellipsis from "ant-design-pro/lib/Ellipsis";
import {Link} from "react-router-dom";

class TableAnt extends Component {

    state = {
        searchText: '',
    };

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Button
                    type="primary"
                    onClick={() => this.handleSearch(selectedKeys, confirm)}
                    icon="search"
                    size="small"
                    style={{ width: 90, marginRight: 8 }}
                >
                    Search
                </Button>
                <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                    Reset
                </Button>
            </div>
        ),
        filterIcon: filtered => (
            <Icon type="search" style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value, record) =>
            record[dataIndex]
                .toString()
                .toLowerCase()
                .includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select());
            }
        },
        render: text => (
            <Highlighter
                highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                searchWords={[this.state.searchText]}
                autoEscape
                textToHighlight={text.toString()}
            />
        ),
    });

    handleSearch = (selectedKeys, confirm) => {
        confirm();
        this.setState({ searchText: selectedKeys[0] });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };
    render() {

        const { t ,data} = this.props;

        const columns =  [
            {
                title: t('threat.title'),
                dataIndex: 'title',
                key: 'title',
                width: '100px',
                ...this.getColumnSearchProps('title'),
                render:text=>{
                    console.log(text)
                    return(
                    <Link to={`/threats/${text}`}>{text}</Link>
                )}

            },

            {
                title: t('threat.affected_scope'),
                dataIndex: 'affected_scope',
                key: 'affected_scope',
               ...this.getColumnSearchProps('affected_scope'),
                render:text=><Ellipsis length={10}>{text}</Ellipsis>,
            },
            {
                title: t('threat.threat_type'),
                dataIndex: 'threat_type',
                key: 'threat_type',
                ...this.getColumnSearchProps('threat_type'),
                render:text=><Ellipsis length={10}>{text}</Ellipsis>,
            },
            {
                title: t('threat.threat_score'),
                dataIndex: 'threat_score',
                key: 'threat_score',
                ...this.getColumnSearchProps('threat_score'),
                render: threat_score => {
                    let color = "";
                    let score = Number(threat_score)
                    if (score < 20)
                        color = "#FFFFFF"
                    if (score >= 20 && score < 35)
                        color = "#0181EE"
                    if (score >= 35 && score < 50)
                        color = "#1BD309"
                    if (score >= 50 && score < 65)
                        color = "#FFFF00"
                    if (score >= 65 && score < 75)
                        color = "#FF7B08"
                    if (score >= 75 && score < 90)
                        color = "#BD0000"
                    if (score >= 90)
                        color = "#6B0000"
                    return (
                        <span>
                        <Tag color={color} key={threat_score} style={{ color:"#000" ,border: "2px solid #FFF"}}>
                            {threat_score}
                        </Tag>
                        </span>
                    );
                },
            },
            {
                title: t('threat.occurrence_time'),
                dataIndex: 'occurrence_time',
                key: 'occurrence_time',
                ...this.getColumnSearchProps('occurrence_time'),
                render:text=><Ellipsis length={10}>{text}</Ellipsis>,
            },
            {
                title: t('threat.description'),
                dataIndex: 'description',
                key: 'description',
                ...this.getColumnSearchProps('description'),
                render:text=><Ellipsis length={20}>{text}</Ellipsis>,
            },
            {
                title: t('threat.tlp'),
                dataIndex: 'tlp',
                key: 'tlp',
                ...this.getColumnSearchProps('tlp'),
                render: tlp => {
                    let color = "";
                    let name = "";
                    if (tlp == "white"){
                        color = "#FFFFFF";
                        name = t('tlp.white');
                    }

                    else if (tlp == "green") {
                        color = "#7ED321";
                        name = t('tlp.green');
                    }
                    else if (tlp == "yellow")
                    {
                           color = "#FFBF00";
                           name = t('tlp.yellow');}
                    else if (tlp == "red")
                        {
                            color = "#FF0000";
                            name = t('tlp.red');}
                    else
                       { color = "#FFBF00";
                           name = t('tlp.yellow');}
                    return (
                        <span>
                        <Tag color={color} key={tlp} style={{ color:"#000" ,border: "2px solid #FFF"}}>
                            {name}
                        </Tag>
                        </span>
                    );
                },
            },
            {
                title: t('threat.vulnerabilities'),
                dataIndex: 'vulnerabilities',
                key: 'vulnerabilities',
                ...this.getColumnSearchProps('vulbarability'),
                render:vulnerabilities=><Ellipsis length={40}>{ vulnerabilities.join()}</Ellipsis>,
            },
            {
                title: t('threat.attack_patterns'),
                dataIndex: 'attack_patterns',
                ...this.getColumnSearchProps('attack_pattern'),
                render:attack_patterns=><Ellipsis length={40}>{ attack_patterns.join()}</Ellipsis>,
            },


        ]
        return <Table
            // onRow={(record)=>{return{ onMouseOver:()=>{this.setState({rowId: record.id})}}}}
            // rowClassName={(record)=>{return record.id === this.state.rowId ? 'clickRowStyl' : '';}}
            columns={columns}
            dataSource={data}
            // size="small"
            bordered={false}
            rowKey="id"
            pagination={{ pageSize: 4 }}
            scroll={{ x:"100%"}}
        />;
    }
}

export default  withTranslation()(TableAnt);
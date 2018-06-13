import React, { Component } from 'react'

class ChannelPage extends Component {

    state={
        canloadmore:true,
        isLoading:false,
        items=[],
        
    }
    renderItems=()=>{

    }
    delete=(index)=>{

    }

    addMedia=()=>{

    }
    render () {
        return (
            <div>
                <Row>
                    <Container>
                        <Col>
                    <img src="" alt=""/>
                    <h2>Page title here</h2>
                    <h2>12313 views</h2></Col>
                        <Col>
                        <h2>12313 subs</h2>
                        <buttton>Subscribe</buttton>
                        </Col>
                        <Col>
                        {{this.renderMyViews}}
                        </Col>
                    </Container>
                </Row>
            </div>
        )
    }
}

export default ChannelPage
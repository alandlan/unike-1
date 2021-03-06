import React from 'react';
import styles from './styles';
import {
  DeckSwiper,
  Card,
  CardItem,
  Left,
  Body,
  Button,
  Icon,
  Right,
  Grid,
  Col,
  Text,
} from 'native-base';
import { DataValue } from '../../../molecules';

export default class TableScheduleServicesPresentation extends React.Component {
  render() {
    return (
      <>
        <DeckSwiper
          ref={c => (this._deckSwiper = c)}
          dataSource={this.props.data}
          renderItem={(item, index) => {
            return (
              <Card key={index} style={styles.scheduleCard}>
                <CardItem header>
                  <Left>
                    <Button
                      transparent
                      iconRight
                      onPress={() => this._deckSwiper._root.swipeRight()}>
                      <Icon type="AntDesign" name="left" />
                    </Button>
                  </Left>
                  <Body>
                    <Button
                      transparent
                      block
                      iconRight
                      onPress={() => this.props.onViewMap([item])}>
                      <Icon
                        type="EvilIcons"
                        name="location"
                        style={styles.iconLarge}
                      />
                    </Button>
                  </Body>
                  <Right>
                    <Button
                      transparent
                      iconRight
                      onPress={() => this._deckSwiper._root.swipeRight()}>
                      <Icon type="AntDesign" name="right" />
                    </Button>
                  </Right>
                </CardItem>
                <CardItem cardBody>
                  <Left>
                    <Body>
                      <DataValue label="Cliente" value={item.Cliente} />
                      <DataValue label="Endereco" value={item.Endereco} />
                      <DataValue label="Serviço" value={item.Servico} />
                      <DataValue label="Horário" value={item.Horario} />
                      <DataValue
                        label="Taxa do serviço"
                        value={item.TaxaServico}
                      />
                      <DataValue
                        label="Valor do serviço"
                        value={item.ValorServico}
                      />
                      <DataValue label="Desconto" value={item.Desconto} />
                      <Grid>
                        <Col>
                          <DataValue
                            label="Total à receber"
                            value={item.TotalReceber}
                          />
                        </Col>
                        <Col>
                          <Button
                            primary
                            onPress={() => this.props.onFinish(item)}>
                            <Text>Fnalizar serviço</Text>
                          </Button>
                        </Col>
                      </Grid>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            );
          }}
        />
      </>
    );
  }
}

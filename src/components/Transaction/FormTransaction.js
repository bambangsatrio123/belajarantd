import { Input, Card, Select, Form, Button } from "antd";
import { Row, Col } from "antd";
import "../../App.css";

export default function FormTransaction() {
  return (
    <div className="content">
      <Card className="box">
        <Form
          labelCol={{
            span: 4,
          }}
          wrapperCol={{
            span: 14,
          }}
          layout="horizontal"
        >
          <Form.Item label="Jenis Transaksi">
            <Select defaultValue="-Pilih Jenis Transaksi-">
              -Pilih Jenis Transaksi-
              <Select.Option value="Laku Pandai" disabled>
                Laku Pandai
              </Select.Option>
              <Select.Option value="Cash-in & Out">Cash-in & Out</Select.Option>
              <Select.Option value="Report">Report</Select.Option>
              <Select.Option value="Setoran Uang">Setoran Uang</Select.Option>
              <Select.Option value="Tarik Tunai">Tarik Tunai</Select.Option>
              <Select.Option value="Isi Ulang Pulsa">
                Isi Ulang Pulsa
              </Select.Option>
              <Select.Option value="Belanja Merchant">
                Belanja Merchant
              </Select.Option>
              <Select.Option value="Tunai" disabled>
                Tunai
              </Select.Option>
              <Select.Option value="Setoran Pinjaman">
                Setoran Pinjaman
              </Select.Option>
              <Select.Option value="Setoran Simpanan">
                Setoran Simpanan
              </Select.Option>
              <Select.Option value="Mini Atm BRI" disabled>
                Mini Atm BRI
              </Select.Option>
              <Select.Option value="Registrasi Mobile Banking">
                Registrasi Mobile Banking
              </Select.Option>
              <Select.Option value="Registrasi Internet Banking">
                Registrasi Internet Banking
              </Select.Option>
              <Select.Option value="Informasi Rekening">
                Informasi Rekening
              </Select.Option>
              <Select.Option value="Transfer Pembayaran">
                Transfer Pembayaran
              </Select.Option>
              <Select.Option value="Isi Ulang Pulsa">
                Isi Ulang Pulsa
              </Select.Option>
              <Select.Option value="Setor-Pasti">Setor-Pasti</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label="Nominal Transaksi">
            <Input type="number" placeholder="Rp"></Input>
          </Form.Item>

          <Form.Item label="Alamat Saat Ini">
            <Row justify="space-between">
              <Col
                xs={24}
                sm={24}
                md={7}
                lg={7}
                xl={7}
                style={{ paddingBottom: 24 }}
              >
                <Select defaultValue="-Provinsi-">
                  -Provinsi-
                  <Select.Option value="A">A</Select.Option>
                  <Select.Option value="B">B</Select.Option>
                  <Select.Option value="C">C</Select.Option>
                  <Select.Option value="D">D</Select.Option>
                </Select>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={7}
                lg={7}
                xl={7}
                style={{ paddingBottom: 24 }}
              >
                <Select defaultValue="-Kota Kabupaten-">
                  -Kota Kabupaten-
                  <Select.Option value="A">A</Select.Option>
                  <Select.Option value="B">B</Select.Option>
                  <Select.Option value="C">C</Select.Option>
                  <Select.Option value="D">D</Select.Option>
                </Select>
              </Col>
              <Col
                xs={24}
                sm={24}
                md={7}
                lg={7}
                xl={7}
                style={{ paddingBottom: 24 }}
              >
                <Select defaultValue="-Kecamatan-">
                  -Kecamatan-
                  <Select.Option value="A">A</Select.Option>
                  <Select.Option value="B">B</Select.Option>
                  <Select.Option value="C">C</Select.Option>
                  <Select.Option value="D">D</Select.Option>
                </Select>
              </Col>
            </Row>

            <Input type="text" placeholder="Alamat Lengkap"></Input>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 10, span: 14 }}>
            <Button type="primary">Cari Agen</Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

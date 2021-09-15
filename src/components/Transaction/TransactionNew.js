import { Card, Select, Button } from "antd";
import "../../App.css";
import { Link } from "react-router-dom";

export default function TransactionNew() {
  const { Option, OptGroup } = Select;

  return (
    <div className="content">
      <Card className="box">
        <table className="table">
          <tr>
            <td>Jenis Transaksi</td>
            <td>:</td>
            <td>
              <Select defaultValue="Pilih Jenis Transaksi" style={{ width: 200 }}>
                <OptGroup label="Laku Pandai">
                  <Option value="cash">cash-in & out</Option>
                  <Option value="report">Report</Option>
                  <Option value="setoran">Setoran Uang</Option>
                  <Option value="tarikTunai">Tarik Tunai</Option>
                  <Option value="isiUlang">Isi Ulang</Option>
                  <Option value="belanjaMerchant">Belanja Merchant</Option>
                </OptGroup>
                <OptGroup label="Tunai">
                  <Option value="setoranPinjaman">Setoran Pinjaman</Option>
                  <Option value="setoranSimpanan">Setoran Simpanan</Option>
                  <Option value="tarikTunai">Tarik Tunai</Option>
                </OptGroup>
                <OptGroup label="Mini Atm Bri">
                  <Option value="registrasiMobile">Registrasi Mobile</Option>
                  <Option value="registrasiInternet">Registrasi Internet</Option>
                  <Option value="informasiRekening">Informasi Rekening</Option>
                  <Option value="transferPembayaran">Transfer Pembayaran</Option>
                  <Option value="isiUlang">Isi Ulang Pulsa</Option>
                  <Option value="setorPasti">Setor Pasti</Option>
                </OptGroup>
              </Select>
            </td>
          </tr>
        </table>
        <div className="btn-container">
          <Link to="/transaksi-baru/setoran-pinjaman">
          <Button type="primary">Selanjutnya</Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}

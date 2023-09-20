export type HeThongRapType = {
  maHeThongRap: string;
  tenHeThongRap: string;
  biDanh: string;
  logo: string;
};

export type RapType = {
  maRap: string;
  tenRap: string;
};

export type CumRapType = {
  maCumRap: string;
  tenCumRap: string;
  diaChi: string;
  danhSachRap: RapType[];
};

export type LichChieuType = {
  maLichChieu: string;
  maRap: string;
  tenRap: string;
  ngayChieuGioChieu: string;
  giaVe: number;
  thoiLuong: number;
};

export type HeThongRapChieuType = {
  cumRapChieu: {
    lichChieuPhim: LichChieuType[];
    maCumRap: string;
    tenCumRap: string;
    hinhAnh: string;
    diaChi: string;
  }[];
  maHeThongRap: string;
  tenHeThongRap: string;
  logo: string;
};

package com.wpc.common.utils.excel.excel;

import com.wpc.common.utils.date.DateFormatUtils;
import org.apache.poi.hssf.eventusermodel.*;
import org.apache.poi.hssf.record.*;
import org.apache.poi.hssf.usermodel.HSSFDateUtil;
import org.apache.poi.poifs.filesystem.POIFSFileSystem;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ReadExcel2003 {

	private List<Map<String, String>> tableContents = new ArrayList<Map<String, String>>();

	private Map<Integer, String> headNames;
	private int beginRownum;

	private HSSFListener userModelEventListener = new HSSFListener() {
		private SSTRecord sstRecord;
		private Map<String, String> currentRow; // 当前行记录
		private int currentRownum = -1; // 当前行下标

		@Override
		public void processRecord(Record record) {
			switch (record.getSid()) {
			// excel或sheet
			case BOFRecord.sid:
				BOFRecord bofRecord = (BOFRecord) record;
				if (bofRecord.getType() == BOFRecord.TYPE_WORKBOOK) {
					System.out.println("开始解析Excel");
				} else if (bofRecord.getType() == BOFRecord.TYPE_WORKSHEET) {
					this.currentRownum = -1;
					System.out.println("开始解析sheet");
				}
				break;
			// sheet
			case BoundSheetRecord.sid:
				BoundSheetRecord bsRecord = (BoundSheetRecord) record;
				System.out.println(bsRecord.getSheetname());
				break;
			// row
			case RowRecord.sid:
				break;
			// 解析记录
			case SSTRecord.sid:
				this.sstRecord = (SSTRecord) record;
				break;
			// 解析字符串
			case LabelSSTRecord.sid:
				LabelSSTRecord labelSSTRecord = (LabelSSTRecord) record;
				this.addData(labelSSTRecord.getRow(), labelSSTRecord.getColumn(), this.sstRecord.getString(labelSSTRecord.getSSTIndex()).getString());
				break;
			// 解析数字或日期
			case NumberRecord.sid:
				NumberRecord numberRecord = (NumberRecord) record;
				String value = null;
				if (HSSFDateUtil.isInternalDateFormat(numberRecord.getXFIndex())) {
					value = DateFormatUtils.formatDate(HSSFDateUtil.getJavaDate(numberRecord.getValue()), "yyyy-MM-dd");
				} else {
					double cellValue = numberRecord.getValue();
					if (cellValue == (long) cellValue) {
						value = Long.toString((long) cellValue);
					} else {
						value = Double.toString(cellValue);
					}
				}
				this.addData(numberRecord.getRow(), numberRecord.getColumn(), value);
				break;
			// 解析boolean或error
			case BoolErrRecord.sid:
				BoolErrRecord boolErrRecord = (BoolErrRecord) record;
				if (boolErrRecord.isBoolean()) {
					this.addData(boolErrRecord.getRow(), boolErrRecord.getColumn(), "" + boolErrRecord.getBooleanValue());
				}
				if (boolErrRecord.isError()) {
					System.out.println("row=" + boolErrRecord.getRow() + ", column=" + boolErrRecord.getColumn() + ", error=" + boolErrRecord.getErrorValue());
				}
				break;
			// 解析空字符串
			case BlankRecord.sid:
				BlankRecord blankRecord = (BlankRecord) record;
				this.addData(blankRecord.getRow(), blankRecord.getColumn(), "");
				break;
			// 解析公式
			case FormulaRecord.sid:
				FormulaRecord formulaRecord = (FormulaRecord) record;
				this.addData(formulaRecord.getRow(), formulaRecord.getColumn(), Double.toString(formulaRecord.getValue()));
				break;
			}
		}

		private void addData(int row, int col, String value) {
			if (row >= beginRownum && headNames.containsKey(col)) {
				if (this.currentRownum != row) {
					this.currentRow = new HashMap<String, String>();
					tableContents.add(this.currentRow);
					this.currentRownum = row;
				}
				this.currentRow.put(headNames.get(col), value.trim());
			}
		}
	};

	/**
	 * @功能: 解析97-2003版excel
	 * @作者: yangc
	 * @创建日期: 2014年5月5日 下午8:05:27
	 * @param path 文件路径
	 * @param headNames 要解析的列号(从0开始)
	 * @param beginRownum 开始解析的行号(从0开始)
	 * @return
	 */
	public List<Map<String, String>> read(String path, Map<Integer, String> headNames, int beginRownum) {
		if (!path.endsWith("xls")) {
			throw new IllegalArgumentException("This is not 97-2003 Excel");
		}
		this.headNames = headNames;
		this.beginRownum = beginRownum;

		FileInputStream fis = null;
		try {
			fis = new FileInputStream(path);
			POIFSFileSystem fs = new POIFSFileSystem(fis);

			HSSFRequest req = new HSSFRequest();
			req.addListenerForAllRecords(userModelEventListener);
			req.addListenerForAllRecords(new FormatTrackingHSSFListener(new MissingRecordAwareHSSFListener(userModelEventListener)));

			HSSFEventFactory factory = new HSSFEventFactory();
			factory.processWorkbookEvents(req, fs);
			fis.close();
			fis = null;
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} finally {
			try {
				if (fis != null) fis.close();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		return tableContents;
	}

}

var PatchNote = [
    new PatchInfo("0.16.1", "기타 - 로케이션 레이블 헤더 0 붙이기 기능의 기본값을 체크 상태로 변경 (원래대로 복구시킨 것)\n"),
    new PatchInfo("0.16.0", "폭탄 설정 모드 - 3x3 폭탄 유닛 옵션 추가\n" + "트리거 출력 기능 - 액션부 최대 행 개수 조절\n" + "트리거 출력 기능 - 폭탄 트리거박스를 턴별로 출력되도록 변경\n" + "트리거 출력 기능 - 컴퓨터 플레이어의 시야 공유 설정 포함\n" + "트리거 출력 기능 - 주석을 영어로 변경\n" + "트리거 출력 기능 - 스테이지 조건 유닛 및 턴 조건 유닛의 옵션 개수 추가\n" + "트리거 출력 기능 - 리바이브 유닛의 무적 여부 설정 기능 추가\n" + "버그 수정 - 라이프를 다 써도 저글링이 부활되던 문제" + "버그 수정 - 다음 스테이지 진입 시 이전 스테이지의 장애물 유닛이 남아있던 문제" + "버그 수정 (테스트 필요) - 다음 스테이지 진입 시 스커지 또는 장애물 유닛 중복 생성 문제\n" + "기타 - 로케이션 레이블 헤더 0 붙이기 기능의 기본값을 체크 해제 상태로 변경\n"),
    new PatchInfo("0.15.1", "브라우저 호환성 업데이트 - 2차\n"),
    new PatchInfo("0.15.0", "브라우저 호환성 업데이트 - 1차\n"),
    new PatchInfo("0.14.1", "로케이션 위치 이동 시에 좌표 변경 저장이 안 되던 문제 수정\n" + "장애물 설치하고 시뮬레이션 실행한 후 종료했을 때 장애물이 그대로 남아 있는 문제 수정\n"),
    new PatchInfo("0.14.0", "시뮬레이션 기능 추가 (현재는 폭탄 - 스커지, 오버로드, 배틀크루저만 가능 / 장애물 - Remove 방식만 가능)\n" + "창 닫기 및 새로고침 시 종료 확인 질문 표시\n"),
    new PatchInfo("0.13.1", "패턴 제작자 질문하는 알림 창 관련 문제 수정\n"),
    new PatchInfo("0.13.0", "타일 이미지가 로드되지 않던 문제 수정 (JS 인터프리터의 스크립트 캐시 전과 후의 동작 문제로 인한 버그)\n" + "트리거 추출 후 TrigEdit으로 복사했을 때, 줄바꿈 문자 문제로 컴파일 에러가 뜨던 현상 수정\n" + "개인 프로젝트 여부 변경 기능 추가\n" + "패턴 제작자 및 설명 표시 + 수정 기능 추가\n" + "기타 자잘한 점들 몇 가지 수정\n"),
    new PatchInfo("0.12.3", "트리거 추출 기능 개선\n"),
    new PatchInfo("0.12.2", "트리거 추출 관련 버그 수정\n"),
    new PatchInfo("0.12.1", "다이얼로그 사이즈 관련 문제 hotfix\n"),
    new PatchInfo("0.12.0", "트리거 추출 기능 추가 (ScmDraft2 - TrigEdit)\n"),
    new PatchInfo("0.11.0", "턴 복사, 반전, 삭제 기능 추가\n" + "프로젝트 제작자, 프로젝트 이름, 패턴 제작자, 패턴 이름 수정 기능 추가\n" + "패턴 삭제 및 위치 변경 (드래그 & 드랍) 기능 추가\n" + "요소들에 마우스 커서 올릴 시 설명 툴팁 팝업\n" + "기타 기능 개선 및 잡다한 버그 수정\n" + "소스 코드 최적화\n"),
    new PatchInfo("0.10.0", "새 패턴, 패턴 저장, 패턴 불러오기, 프로젝트 저장, 프로젝트 불러오기 기능 구현\n"),
    new PatchInfo("0.9.0", "폭탄 설정 모드 - 로케이션 레이어 개념 구현 (한 곳에 로케이션 중첩 시 탭 키로 레이어 전환)\n" + "자잘한 버그 수정\n"),
    new PatchInfo("0.8.0", "로케이션 드래그 이동 기능 구현\n" + "로케이션 중첩 시 순차 선택 기능 구현\n"),
    new PatchInfo("0.7.0", "폭탄 설정 모드의 폭탄 유닛 선택 방식 변경\n" + "장애물 설정 시 이미지 표시\n" + "폭탄 설정 시 종족별로 색깔 다르게 표시\n"),
    new PatchInfo("0.6.0", "폭탄 설정 모드 기본 기능 구현 완료\n" + "버그 수정 및 코드 개선\n"),
    new PatchInfo("0.5.0", "지형 모드일 때 로케이션이 보이지 않도록 수정\n" + "프로젝트 개념 도입 및 현재 패턴 표시\n" + "전반적인 코드 개선\n"),
    new PatchInfo("0.4.0", "로케이션 모드 구현 완료\n"),
    new PatchInfo("0.3.0", "지형 모드 구현 완료 (지형 복사/붙여넣기는 나중에 지원할 예정)\n"),
    new PatchInfo("0.2.0", "캔버스 기능 구현 (지형, 로케이션, 그리드)\n" + "Badlands ~ Twilight World 까지 모든 지형 지원\n" + "디자인 패턴 변경 (-> MVC)\n"),
    new PatchInfo("0.1.0", "데스크탑 브라우저용 기본 UI 설계 작업\n")
];

function PatchInfo(version, detail) {
    this.version = version;
    this.detail = detail;
}